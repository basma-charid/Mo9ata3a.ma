package com.digitalisation.backend.Department.Entity;

import com.digitalisation.backend.Admin.Entity.Admin;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Departement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id ;

    @Column(name="")
    private String service_name ;

    @ManyToOne(cascade =  CascadeType.ALL , fetch = FetchType.EAGER)
    private Admin admin ;



}
