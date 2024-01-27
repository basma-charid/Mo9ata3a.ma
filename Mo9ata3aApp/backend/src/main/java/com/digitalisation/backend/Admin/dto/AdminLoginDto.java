package com.digitalisation.backend.Admin.dto;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminLoginDto {
    
    @Email
    
    private String email;

    
    private String password;


}
