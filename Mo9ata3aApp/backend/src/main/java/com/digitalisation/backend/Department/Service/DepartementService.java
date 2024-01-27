package com.digitalisation.backend.Department.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.digitalisation.backend.Department.Entity.Departement;
import com.digitalisation.backend.Department.Repository.DepartmentRepo;

@Service
public class DepartementService  {

    @Autowired 
    private DepartmentRepo departmentRepo ;


    public List<Departement> getAllServices(){
        return this.departmentRepo.findAll();
    }
    
    public Departement getOneService(Integer id){
        return this.departmentRepo.findById(id).get();
    }
    public void deleteOneService(Integer id){
        this.departmentRepo.deleteById(id);
    }

    public Departement updateService(Integer id , Departement data){
        Departement dep = this.getOneService(id);
        dep.setService_name(data.getService_name());
        return this.departmentRepo.save(dep);
    }
    public Departement createDepartement(Departement data){
        return this.departmentRepo.save(data);
    }
}