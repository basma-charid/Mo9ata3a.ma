package com.digitalisation.backend.Client.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitalisation.backend.Client.Entity.AddedToFinal;

public interface AddedToFinalRepo extends JpaRepository<AddedToFinal ,Integer> {

    AddedToFinal findByEmail(String email);

    


}
