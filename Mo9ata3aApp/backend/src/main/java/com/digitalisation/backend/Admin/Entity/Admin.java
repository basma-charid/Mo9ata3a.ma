package com.digitalisation.backend.Admin.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="Admin")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Admin {
    
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer admin_id;

    @Column(name="admin_name")
    private String admin_name;

    @Column(name="email")
    private String email;

    @Column(name="admin_password")
    private String admin_password;

    @Column(name="phone_number")
    private Integer phone_number ;

    @Column(name="role")
    private String role  = "ADMIN";

    @Column(name="age")
    private Integer age ;

    @Column(name="gender")
    private String gender ;
    
    @Column(name = "CIN")
    private String cin ;


}
