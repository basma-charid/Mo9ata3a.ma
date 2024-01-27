package com.digitalisation.backend.Demande.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.digitalisation.backend.Client.Entity.AddedToFinal;
import com.digitalisation.backend.Client.Repository.AddedToFinalRepo;
import com.digitalisation.backend.Demande.Entity.Demande;
import com.digitalisation.backend.Demande.Repository.DemandeRepo;

@Service
public class DemandeService {

    @Autowired 
    private DemandeRepo demandeRepository ;

    @Autowired
    private AddedToFinalRepo userRepo ;

    public List<Demande> getAllDemande(){
        List<Demande> demandes = this.demandeRepository.findAll();
        demandes.forEach(demande -> {
            byte[] imageData = demande.getDocumentImage();
            String base64ImageData = Base64.getEncoder().encodeToString(imageData);
            demande.setBase64ImageData(base64ImageData);
        });

        return demandes;
    }

   public Demande createDemande(Demande data , Integer user_id){
        Demande doc = new Demande() ;
        AddedToFinal user = this.userRepo.findById(user_id).get();
        
        doc.setDocumentImage(data.getDocumentImage());
        doc.setSecret_code(data.getSecret_code());
        doc.setSubmissionDate(new Date());
        doc.setRaison(data.getRaison());
        doc.setUser(user);
        return this.demandeRepository.save(doc);
    }



    public void updateDemande(Integer id, MultipartFile file ) throws IOException {
        Demande doc = this.demandeRepository.findById(id).get();
        doc.setDocumentImage(file.getBytes());
        doc.setState("rendered");
        this.demandeRepository.save(doc);
    }

    public Demande findDemandeBySlug(String slug) {
        List<Demande> docs = this.getAllDemande();
        List<Demande> doc =  new ArrayList<>();
        for (Demande document : docs) {
            if(document.getSecret_code().equals(slug)){
                doc.add(document);
                break;
            }
        }
        return doc.get(0);
    }   

}
