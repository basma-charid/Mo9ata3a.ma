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
public class LoginUserDto {


    @Email
    @NotEmpty
    private String email ;

    @NotEmpty
    private String password ;


}
