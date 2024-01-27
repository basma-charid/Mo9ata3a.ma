package com.digitalisation.backend.Admin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalisation.backend.Admin.Entity.Admin;


@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {

    Optional<Admin> findByEmail(String email);
    
}
