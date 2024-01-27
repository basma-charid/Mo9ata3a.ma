package com.digitalisation.backend.Demande.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.digitalisation.backend.Demande.Entity.Demande;
import com.digitalisation.backend.Demande.Service.DemandeService;


@RestController
@CrossOrigin("http://localhost:3000")
public class DemandeController {
    
    @Autowired
    private DemandeService demandeService ;

     @GetMapping("/getAllDemande")
    public List<Demande> getAllDemande(){
        return this.demandeService.getAllDemande();
    }   

    @PostMapping("/createDemande/{id}")
    public Demande createDemande(
        @PathVariable("id") Integer id ,
        @RequestParam("file") MultipartFile file ,
        @RequestParam("pourquoi") String raison ,
        @RequestParam("secret") String secretCode
        ) throws IOException{
            System.out.println(file);
            Demande doc = new Demande();
            doc.setDocumentImage(file.getBytes());
            doc.setRaison(raison);
            doc.setSecret_code(secretCode);
            return this.demandeService.createDemande(doc, id);
    }


    @PostMapping("/updateDemande/{id}")
    public List<Demande> updateDemande(@PathVariable("id") Integer id , @RequestParam("document") MultipartFile file ) throws IOException{
        this.demandeService.updateDemande(id,file);
        return this.getAllDemande();
    }

    @GetMapping("/getDemandeBySlug/{slug}")
    public Demande getDemandeSlugged(@PathVariable("slug") String slug){
        return this.demandeService.findDemandeBySlug(slug);
    }



}
