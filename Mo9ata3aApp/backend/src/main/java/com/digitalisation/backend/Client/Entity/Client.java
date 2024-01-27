package com.digitalisation.backend.Client.Entity;

import java.util.List;

import com.digitalisation.backend.Reclamation.Entity.Reclamation;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Client")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Client {
    

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer user_id;

    @Column(name="fullName")
    private String fullName ;

    @Column(name="email")
    private String email ;

    @Column(name = "password")
    private String password ;

    @Column(name = "age")
    private Integer age ;

    @Column(name="role")
    private String role = "BASIC";

    @Column(name="state")
    private String state = "pending";

    @Column(name="phone")
    private String phone ;

    @Column(name="gender")
    private String gender = "male";
   
    @Column(name ="cin")
    private String cin ;

    @Column(name= "ville")
    private String ville ;
}

