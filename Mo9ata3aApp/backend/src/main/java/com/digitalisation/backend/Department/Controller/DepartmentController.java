package com.digitalisation.backend.Department.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.digitalisation.backend.Department.Entity.Departement;
import com.digitalisation.backend.Department.Service.DepartementService;

@RestController
@CrossOrigin("http://localhost:3000")
public class DepartmentController {
    
    @Autowired
    private DepartementService depService ;

    @GetMapping("/getAllService")
    public List<Departement> getAllService(){
        return this.depService.getAllServices();
    }

    @GetMapping("/getOneService/{id}")
    public Departement getOneService(Integer id ){
        return this.depService.getOneService(id);
    }

    @PostMapping("/createService")
    public List<Departement> createOneDepartement(@RequestBody Departement data){
        this.depService.createDepartement(data);
        return this.getAllService();
    }

    @PostMapping("/updateService/{id}")
    public List<Departement> updateService(@RequestBody Departement data , @PathVariable("id") Integer id){
        this.depService.updateService(id, data);
        return this.getAllService();
    }

    @PostMapping("/deleteService/{id}")
    public void deleteService(@PathVariable("id") Integer id ){
        this.depService.deleteOneService(id);
    }

}
