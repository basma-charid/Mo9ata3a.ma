package com.digitalisation.backend.Reclamation.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalisation.backend.Client.Entity.Client;
import com.digitalisation.backend.Client.Repository.AddedToFinalRepo;
import com.digitalisation.backend.Client.Service.ClientService;
import com.digitalisation.backend.Reclamation.Entity.Reclamation;
import com.digitalisation.backend.Reclamation.Repository.ReclamationRepo;
import com.digitalisation.backend.Reclamation.dto.CreateReclamationDto;
import com.digitalisation.backend.Reclamation.dto.UpdateReclamationDto;


@Service
public class ReclamationService {

    @Autowired
    private ReclamationRepo reclamationRepo;



    @Autowired
    private AddedToFinalRepo addedToFinalRepo ;

    public Reclamation createReclamation(CreateReclamationDto dataDto , Integer user_id) {
            Reclamation reclamation = new Reclamation();
            System.out.println(addedToFinalRepo.findById(user_id));
            reclamation.setClient(addedToFinalRepo.findById(user_id).get());
            reclamation.setContenu(dataDto.getContenu());
            reclamation.setTitle(dataDto.getTitle());
            reclamation.setState("pending");
            reclamation.setSubmissionDate(new Date());
            return this.reclamationRepo.save(reclamation) ;  
    }

    public Reclamation getOneReclamtion(Integer id, Integer user_id)throws Exception {
        Reclamation rec = this.reclamationRepo.findById(id).get();
        if(rec == null){
            throw new Exception("no reclamtion with this id ");
        }
        return rec;
    }

    public List<Reclamation> getAllReclamation(Integer id) {
        List<Reclamation> list = this.reclamationRepo.findAll();
        List<Reclamation> toreturn = new ArrayList<>();
        System.out.println("client: "+list.get(0).getClient());
        for(Reclamation rec : list){
            if(rec.getClient() != null){
                if(rec.getClient().getUser_id().equals(id)){
                    toreturn.add(rec);
                }
            }
        }
        return toreturn;
    }

    public List<Reclamation> getReclama(){
        return this.reclamationRepo.findAll();
    }

    public void deleteReclamation(Integer id) {
        this.reclamationRepo.deleteById(id);
    }

    public Reclamation updateReclamation(Integer id , UpdateReclamationDto data , Integer user_id) throws Exception {
        Reclamation rec = this.getOneReclamtion(id,user_id);
        rec.setTitle(data.getTitle());
        rec.setContenu(data.getContenu());
        return this.reclamationRepo.save(rec);
    }

    public Reclamation findRecForAdmin(Integer id ) {
        Reclamation rec = this.reclamationRepo.findById(id).get();
        System.out.println(rec);
        rec.setState("READ");
        return this.reclamationRepo.save(rec);
    }

}
