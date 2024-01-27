package com.digitalisation.backend.Reclamation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalisation.backend.Reclamation.Entity.Reclamation;


@Repository
public interface ReclamationRepo  extends JpaRepository<Reclamation,Integer>{
    
}

