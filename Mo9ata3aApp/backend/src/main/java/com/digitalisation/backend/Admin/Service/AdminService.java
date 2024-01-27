package com.digitalisation.backend.Admin.Service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.digitalisation.backend.Admin.Entity.Admin;
import com.digitalisation.backend.Admin.Repository.AdminRepository;
import com.digitalisation.backend.Admin.dto.AdminLoginDto;
import com.digitalisation.backend.Admin.dto.AdminSignupDto;
import com.digitalisation.backend.Admin.dto.UpdateAdminDto;
import jakarta.validation.Valid;

@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminRepository ;

    
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Admin authenticateAdmin(AdminLoginDto adminLogin) throws Exception {
        Optional<Admin> isFound = this.adminRepository.findByEmail(adminLogin.getEmail());
        if(isFound == null){
            throw new Exception("no admin found with credentials !! ");
        }
        if(!passwordEncoder.matches(adminLogin.getPassword(), isFound.get().getAdmin_password())){
            throw new Exception("wrong data");
        }
        return isFound.get();
    }

    public Admin registerUser(AdminSignupDto admindata) throws Exception {
        Optional<Admin> isFound = (Optional<Admin>)  this.adminRepository.findByEmail(admindata.getEmail());
        if(isFound.isEmpty() == true){
            Admin newAdmin = new Admin();
            // hash password : 
            String hashedPassword = passwordEncoder.encode(admindata.getPassword());
            newAdmin.setAdmin_name(admindata.getFullName());
            newAdmin.setEmail(admindata.getEmail());
            newAdmin.setAdmin_password(hashedPassword);
            newAdmin.setPhone_number(admindata.getPhoneNumber());
            return this.adminRepository.save(newAdmin);
        }
        throw new Exception("this email already exist on the system try to sign up ");
    }

    public Admin findById(Integer id) throws Exception{
        Admin adminFound = this.adminRepository.findById(id).get();
        if(adminFound == null){
            throw new Exception("admin not found !!");
        }
        return adminFound;
    }

    public Admin updateAdmin(Integer id, UpdateAdminDto adminData) throws Exception {
        Admin admin = this.findById(id);
        if(admin == null){
            throw new Exception("no admin found with id !!");
        }
        admin.setAdmin_name(adminData.getFullName() != null ? adminData.getFullName() : admin.getAdmin_name());
        admin.setEmail(adminData.getEmail() != null ? adminData.getEmail() : admin.getEmail());
        admin.setAdmin_password(adminData.getPassword() != null ? adminData.getPassword() : admin.getAdmin_password());
        admin.setPhone_number(adminData.getPhoneNumber() != null ? adminData.getPhoneNumber() : admin.getPhone_number());
        admin.setGender(adminData.getGender() != null ? adminData.getGender() : admin.getGender());
        admin.setAge(adminData.getAge() != null ? adminData.getAge() : admin.getAge());

        return this.adminRepository.save(admin);
    }

    public String deleteAdmin(Integer id) throws Exception {
        Admin isFound = this.findById(id);
        if(isFound == null){
            throw new Exception("this admin is not found !!");
        }
        this.adminRepository.deleteById(id);
        return "deleted !";
    }

}
