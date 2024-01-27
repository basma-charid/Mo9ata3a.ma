package com.digitalisation.backend.Client.Controller ;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.digitalisation.backend.Client.Dto.LoginUserDto;
import com.digitalisation.backend.Client.Dto.SignupUSerdto;
import com.digitalisation.backend.Client.Dto.UpdateUserDto;
import com.digitalisation.backend.Client.Entity.AddedToFinal;
import com.digitalisation.backend.Client.Entity.Client;
import com.digitalisation.backend.Client.Repository.AddedToFinalRepo;
import com.digitalisation.backend.Client.Repository.ClientReposiory;
import com.digitalisation.backend.Client.Service.ClientService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@SessionAttributes("user")
@CrossOrigin("http://localhost:3000")
public class ClientController { 

    @Autowired
    private ClientService clientService;

    @Autowired
    private HttpSession session;

    @Autowired
    private ClientReposiory clientRepo ;

    @Autowired
    private AddedToFinalRepo addedToFinalRepo ;

    @PostMapping("/signup")
    public Client signUp(@Valid @RequestBody SignupUSerdto client){
        Client createdClient = this.clientService.signupUser(client);
        session.setAttribute("user", createdClient);
        System.out.println(session.getAttribute("user"));
        return createdClient;
    }

    @PostMapping("/login")
    public AddedToFinal loginUser(@Valid @RequestBody LoginUserDto clientData) throws Exception {
        
        AddedToFinal loggedInClient = this.clientService.logginUser(clientData);
        session.setAttribute("user", loggedInClient);
        System.out.println(session.getAttribute("user"));
        return loggedInClient;
    }
    
    @PostMapping("/logout")
    public String logOut(){
        session.setAttribute("user", null);
        session.invalidate();
        return "logged out";
    }
    
    @GetMapping("/allUsers")
    public List<Client> listOfUsers() throws Exception{
        return this.clientService.fetchAllUsers();
    }


    @GetMapping("/client/{id}")
    public AddedToFinal findMe(@PathVariable("id") Integer id ) throws Exception {
  
    return this.addedToFinalRepo.findById(id).get();
           
    }

    @GetMapping("/getUserFromWait/{email}")
    public Client findByEmail(@PathVariable("email") String email){
        Client  client = this.clientRepo.findByEmail(email) ;
        return client;
    }


    @PostMapping("/deleteClient/{id}")
    public void deleteMe(@PathVariable("id") Integer id ) throws Exception{
        this.addedToFinalRepo.deleteById(id);
    }   
    @PostMapping("/updateMe/{id}")
    public Client updateMe(@PathVariable("id") Integer id  ,@RequestBody UpdateUserDto clientData ) throws Exception{
        Client client = (Client) session.getAttribute("user");
        if(client == null){
            throw new Exception("not authorized !! ");
        }

        if(client.getUser_id() == id || client.getRole() == "ADMIN" ){
            return this.clientService.updateMe(id,clientData);
        }

        throw new Exception("you are not allowed to do this operation !");
    }


    @PostMapping("/updateUser/{id}")
    public AddedToFinal updateUSer( @PathVariable("id") Integer id , @RequestBody UpdateUserDto finalData){
        AddedToFinal client = this.addedToFinalRepo.findById(id).get();
        client.setAge(finalData.getAge());        
        client.setEmail(finalData.getEmail());
        client.setGender(finalData.getGender());
        client.setPhone(finalData.getPhone());
        client.setFullName(finalData.getFullName());
        return this.addedToFinalRepo.save(client);
    }
    
    @PostMapping("/addClienttoWaitList/{id}")
    public AddedToFinal addClientToadded(@PathVariable("id") Integer id ) throws Exception{
        Client client = this.clientRepo.findById(id).get();
        client.setState("added");
        this.clientRepo.save(client);
        AddedToFinal finalUser = new AddedToFinal();
        finalUser.setFullName(client.getFullName());        
        finalUser.setEmail(client.getEmail());
        finalUser.setPassword(client.getPassword());
        finalUser.setAge(client.getAge());
        finalUser.setGender(client.getGender());
        finalUser.setPhone(client.getPhone());        
        finalUser.setRole(client.getRole());
        finalUser.setState("added");
        this.clientRepo.deleteById(id);
        return this.addedToFinalRepo.save(finalUser);

    }

    @GetMapping("/getAllAddedUsers")
    public List<AddedToFinal> getAllAddedUsers() {
        return this.addedToFinalRepo.findAll();
    }

}