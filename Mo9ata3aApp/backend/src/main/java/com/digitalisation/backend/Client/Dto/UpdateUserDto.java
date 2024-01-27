package com.digitalisation.backend.Client.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateUserDto {

    
    private String email ;

    private String password ;

    private Integer age ;

    private String fullName ;
    private String gender ;

    private String phone ;

}
