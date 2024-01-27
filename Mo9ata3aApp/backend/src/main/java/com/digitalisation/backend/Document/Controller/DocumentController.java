package com.digitalisation.backend.Document.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.yaml.snakeyaml.events.DocumentEndEvent;

import com.digitalisation.backend.Document.Entity.Document;
import com.digitalisation.backend.Document.Service.DocumentService;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DocumentController {

    @Autowired
    private DocumentService documentService ;

    @GetMapping("/getAllDocument")
    public List<Document> getAllDocument(){
        return this.documentService.getAllDocument();
    }   

    @PostMapping("/createDoccumentToEgalisate/{id}")
    public Document createDocument(
        @PathVariable("id") Integer id ,
        @RequestParam("file") MultipartFile file ,
        @RequestParam("pourquoi") String raison ,
        @RequestParam("secret") String secretCode
        ) throws IOException{
            System.out.println(file);
            Document doc = new Document();
            doc.setDocumentImage(file.getBytes());
            doc.setRaison(raison);
            doc.setSecret_code(secretCode);
            return this.documentService.createDocument(doc, id);
    }

    @PostMapping("/updateEgalisated/{id}")
    public List<Document> updateDocument(@PathVariable("id") Integer id , @RequestParam("document") MultipartFile file ) throws IOException{
        this.documentService.updateDocument(id,file);
        return this.getAllDocument();
    }

    @GetMapping("/getDocumentBySlug/{slug}")
    public Document getDocumentSlugged(@PathVariable("slug") String slug){
        return this.documentService.findDocumentBySlug(slug);
    }


}
