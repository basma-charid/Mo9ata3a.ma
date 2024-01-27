package com.digitalisation.backend.Reclamation.Entity;


import java.util.Date;

import com.digitalisation.backend.Client.Entity.AddedToFinal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="Reclamation")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Reclamation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name="title")
    private  String title ;

    
    @Column(name = "Contenu")
    private String Contenu ;

    @Column(name="State")
    private String State  = "pending";

    @Column(name="date_submission")
    private Date submissionDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private AddedToFinal client ;
    
}
