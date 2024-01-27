package com.digitalisation.backend.Department.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalisation.backend.Department.Entity.Departement;

@Repository
public interface DepartmentRepo extends JpaRepository<Departement , Integer> {
    


}
