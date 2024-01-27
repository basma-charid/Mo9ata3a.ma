package com.digitalisation.backend.Admin.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.digitalisation.backend.Admin.Entity.Admin;
import com.digitalisation.backend.Admin.Service.AdminService;
import com.digitalisation.backend.Admin.dto.AdminLoginDto;
import com.digitalisation.backend.Admin.dto.AdminSignupDto;
import com.digitalisation.backend.Admin.dto.UpdateAdminDto;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;


@RestController
@SessionAttributes("user")
@CrossOrigin("http://localhost:3000")
public class AdminController {
    
    @Autowired
    private AdminService adminService;

    @Autowired 
    private HttpSession session ;


    @PostMapping("/adminLogin")
    public Admin authenticateAdmin(@Valid @RequestBody AdminLoginDto adminLogin) throws Exception{
        Admin authAdmin = this.adminService.authenticateAdmin(adminLogin);
        session.setAttribute("user", authAdmin);
        return authAdmin;
    }

    @PostMapping("/adminSignup")
    public Admin registerAdmin(@Valid @RequestBody AdminSignupDto admindata) throws Exception{
        System.out.println(admindata);
        Admin registred = this.adminService.registerUser(admindata);
        session.setAttribute("user", registred);
        return registred;
    }

    @GetMapping("/getMeAdmin/{id}")
    public Admin getMe(@PathVariable("id") Integer id ) throws Exception{
        // Admin admin = (Admin) session.getAttribute("user");
       
        return this.adminService.findById(id);
    }

    @PostMapping("/updateAdmin/{id}")
    public Admin updatMe(@PathVariable("id") Integer id  ,@RequestBody UpdateAdminDto adminData) throws Exception{
        // Admin admin = (Admin) session.getAttribute("user");
        // if(admin == null){
        //     throw new Exception("no authorized to do this ops ");
        // }
        Admin updatedOne = this.adminService.updateAdmin(id,adminData);
        session.setAttribute("user", updatedOne);
        return updatedOne;        
    }
    
    @PostMapping("/deleteAdmin/{id}")
    public String deleteAdmin(@PathVariable("id") Integer id ) throws Exception{
        return this.adminService.deleteAdmin(id);
    }
}
