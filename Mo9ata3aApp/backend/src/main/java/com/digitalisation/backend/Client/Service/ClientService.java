package com.digitalisation.backend.Client.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalisation.backend.Client.Dto.LoginUserDto;
import com.digitalisation.backend.Client.Dto.SignupUSerdto;
import com.digitalisation.backend.Client.Dto.UpdateUserDto;
import com.digitalisation.backend.Client.Entity.AddedToFinal;
import com.digitalisation.backend.Client.Entity.Client;
import com.digitalisation.backend.Client.Repository.AddedToFinalRepo;
import com.digitalisation.backend.Client.Repository.ClientReposiory;

import jakarta.validation.Valid;

@Service
public class ClientService {
    
    @Autowired ClientReposiory clientRepository ;
    @Autowired AddedToFinalRepo addedToFinalRepo;

    public Client signupUser(SignupUSerdto clientDto){
        Client newClient = new Client();
        newClient.setFullName(clientDto.getFullName());        
        newClient.setEmail(clientDto.getEmail());
        newClient.setPassword(clientDto.getPassword());
        newClient.setAge(clientDto.getAge());
        newClient.setCin(clientDto.getCin());
        newClient.setGender(clientDto.getSex());
        newClient.setVille(clientDto.getVille());

        return this.clientRepository.save(newClient);
    }

    public AddedToFinal logginUser(@Valid LoginUserDto clientData) throws Exception {
        AddedToFinal isFound = this.addedToFinalRepo.findByEmail(clientData.getEmail());

        if(!isFound.getPassword().equals(clientData.getPassword())){
            throw new Exception("wrong data for the user !! ");
        }
        return isFound;
    }

    public List<Client> fetchAllUsers() {
        return this.clientRepository.findAll();
    }

    public Client findMe(Integer id) {
        Optional<Client> client =  this.clientRepository.findById(id);
        return client.get();
    }

    public String deleteMe(Integer id) throws Exception{
        Client client = this.clientRepository.findById(id).get();
        if(client == null){
            throw new Exception("the user is not found !!");
        }
        this.clientRepository.deleteById(id);
        return "Client deleted !!";
    }

    public Client updateMe(Integer id, UpdateUserDto clientData) throws Exception {
        Client client = this.findMe(id);
        if(client == null){
            throw new Exception("the user requested is not found !!");
        }
        client.setEmail(clientData.getEmail() != null ? clientData.getEmail() : client.getEmail() );
        client.setFullName(clientData.getFullName() != null ? clientData.getFullName() : client.getFullName());
        client.setAge(clientData.getAge() != null ? clientData.getAge() : client.getAge());
        client.setPassword(clientData.getPassword()  != null ? clientData.getPassword() : client.getPassword());
        return this.clientRepository.save(client);
    }


}
