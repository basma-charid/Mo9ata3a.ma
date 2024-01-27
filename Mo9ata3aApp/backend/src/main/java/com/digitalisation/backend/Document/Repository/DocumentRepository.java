package com.digitalisation.backend.Document.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalisation.backend.Document.Entity.Document;
import java.util.List;


@Repository
public interface DocumentRepository extends JpaRepository<Document ,Integer> {

        

}
