package com.digitalisation.backend.Client.Dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignupUSerdto {

    @NotEmpty
    private String fullName ;

    @NotEmpty
    @Email
    private String email ;

    @NotEmpty
    private String password ;

    
    private Integer age;

    private String   ville ; 
    private String cin ;
    private String sex ;


}
