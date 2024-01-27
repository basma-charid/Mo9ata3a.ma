package com.digitalisation.backend.Demande.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalisation.backend.Demande.Entity.Demande;


@Repository
public interface DemandeRepo extends JpaRepository<Demande , Integer> {
    
}
