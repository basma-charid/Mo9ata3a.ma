package com.digitalisation.backend.Client.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalisation.backend.Client.Entity.Client;

@Repository
public interface  ClientReposiory extends JpaRepository<Client,Integer> {

    Client findByEmail(String email);
    
    

}
