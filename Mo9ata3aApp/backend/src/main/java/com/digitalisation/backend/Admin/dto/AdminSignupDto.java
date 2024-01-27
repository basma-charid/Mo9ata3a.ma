package com.digitalisation.backend.Admin.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AdminSignupDto {
    
    @NotEmpty
    private String fullName ;

    @Email
    @NotEmpty
    private String email ;    
    
    @NotEmpty
    private String password ;

    @NotNull
    private Integer phoneNumber ;


}
