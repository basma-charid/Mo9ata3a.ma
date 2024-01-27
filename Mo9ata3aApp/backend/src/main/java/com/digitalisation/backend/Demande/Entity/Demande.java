package com.digitalisation.backend.Demande.Entity;

import java.util.Date;

import com.digitalisation.backend.Client.Entity.AddedToFinal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="demande")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Demande {

    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Integer id ;

    @Lob
    @Column(name = "documentImage", length = Integer.MAX_VALUE)
    private byte[] documentImage ;


    @Column(name="secret_code")
    private String secret_code ;
    
    @Column(name="raison")
    private String raison ;


    @Column(name="submissionDate")
    private Date submissionDate ;

    @Transient
    private String base64ImageData ;

    @Column(name="state")
    private String state = "not_rendered" ;

    @ManyToOne(fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    private AddedToFinal user ;    



}
