package com.digitalisation.backend.Admin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateAdminDto {

    
    private  String fullName ;

    private String email ;


    private Integer phoneNumber ;

    private String password ;
    
    private Integer age ;

    private String gender ;


}


