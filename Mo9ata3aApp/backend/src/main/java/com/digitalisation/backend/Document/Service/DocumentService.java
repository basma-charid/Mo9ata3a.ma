package com.digitalisation.backend.Document.Service;

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
import com.digitalisation.backend.Document.Entity.Document;
import com.digitalisation.backend.Document.Repository.DocumentRepository;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository ;

    @Autowired
    private AddedToFinalRepo userRepo ;

    public List<Document> getAllDocument(){
        
        List<Document> documents =  this.documentRepository.findAll();
        documents.forEach(document -> {
            byte[] imageData = document.getDocumentImage();
            String base64ImageData = Base64.getEncoder().encodeToString(imageData);
            document.setBase64ImageData(base64ImageData);
        });
        return documents;
    }

    public Document createDocument(Document data , Integer user_id){
        Document doc = new Document() ;
        AddedToFinal user = this.userRepo.findById(user_id).get();
        
        doc.setDocumentImage(data.getDocumentImage());
        doc.setSecret_code(data.getSecret_code());
        doc.setSubmissionDate(new Date());
        doc.setRaison(data.getRaison());
        doc.setUser(user);
        return this.documentRepository.save(doc);
    }



    public void updateDocument(Integer id, MultipartFile file ) throws IOException {
        Document doc = this.documentRepository.findById(id).get();
        doc.setDocumentImage(file.getBytes());
        doc.setState("egalisated");
        this.documentRepository.save(doc);
    }

    public Document findDocumentBySlug(String slug) {
        List<Document> docs = this.getAllDocument();
        List<Document> doc =  new ArrayList<>();
        for (Document document : docs) {
            if(document.getSecret_code().equals(slug)){
                doc.add(document);
                break;
            }
        }
        return doc.get(0);
    }   




}
