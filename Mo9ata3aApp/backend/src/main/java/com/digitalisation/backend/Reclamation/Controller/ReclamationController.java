package com.digitalisation.backend.Reclamation.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.digitalisation.backend.Client.Entity.Client;
import com.digitalisation.backend.Reclamation.Entity.Reclamation;
import com.digitalisation.backend.Reclamation.Service.ReclamationService;
import com.digitalisation.backend.Reclamation.dto.CreateReclamationDto;
import com.digitalisation.backend.Reclamation.dto.UpdateReclamationDto;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@SessionAttributes("user")
@CrossOrigin("http://localhost:3000")
public class ReclamationController {
    
    @Autowired
    private HttpSession session ;

    @Autowired
    private ReclamationService reclamationService ;

    @PostMapping("/createReclamation/{user_id}")
    public Reclamation createReclamation(@PathVariable("user_id") Integer user_id,@Valid @RequestBody CreateReclamationDto dataDto ){
        Client signinClient = (Client) session.getAttribute("user");
        System.out.println(signinClient);
        Reclamation reclamation = this.reclamationService.createReclamation(dataDto , user_id);
        return reclamation;
    }

    @GetMapping("/getAllReclamation/{id}")
    public List<Reclamation> getListOfData(@PathVariable("id") Integer id ) throws Exception{
        Client signedIn = (Client) session.getAttribute("user");

            List<Reclamation> listOfData = this.reclamationService.getAllReclamation(id);
            return listOfData;
        
    }
    @GetMapping("/AllReclamation")
    public List<Reclamation> getAllReclam() throws Exception{
        return this.reclamationService.getReclama();
    }
    @PostMapping("/updateReclamationState/{id}")
    public List<Reclamation> updateThis( @PathVariable("id") Integer id ) throws Exception{
        System.out.println("data"+id);
        Reclamation rec = this.reclamationService.findRecForAdmin(id);
        System.out.println(rec);
        return this.getAllReclam();
    }

    

    @GetMapping("/getOneReclamation/{id}/{user_id}")
    public Reclamation getOneReclamation(@PathVariable("id") Integer id , @PathVariable("user_id") Integer user_id) throws Exception {
        // Client client = (Client) session.getAttribute("user");
        // if(client == null){
        //     throw new Exception("u are not athorieed to see this ressource !! ");
        // }
        Reclamation reclamation = this.reclamationService.getOneReclamtion(id,user_id);
        if(reclamation.getClient().getUser_id() != user_id){
            throw new Exception("not allowed to see this reclamation");
        }
        return reclamation;
    }

    @PostMapping("/DeleteReclamation/{id}/{user_id}")
    public String deleteReclamation(@PathVariable("id") Integer id , @PathVariable("user_id") Integer user_id) throws Exception{
        // Client client = (Client) session.getAttribute("user");

        // if(client == null){
        //     throw new Exception("not allowed to do this opration pelease logg in");
        // }

        Reclamation rec = this.getOneReclamation(id,user_id);
        if(rec.getClient() != null){
            if(rec.getClient().getUser_id().equals(user_id)){
                this.reclamationService.deleteReclamation(id);
                return "deleted";
            }
        }
        throw new Exception("not authorized !!");
    }
     @PostMapping("/updateReclamation/{id}/{user_id}")
    public Reclamation updateReclamation(@PathVariable("id") Integer id , @PathVariable("user_id") Integer user_id ,@RequestBody UpdateReclamationDto data) throws Exception{
        Reclamation rec = this.getOneReclamation(id,user_id);
        
        if(rec.getClient().getUser_id().equals(user_id)){
            return  this.reclamationService.updateReclamation(id,data,user_id);
        }
        return null;
    }


}
