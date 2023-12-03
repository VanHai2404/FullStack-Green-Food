package com.example.demo.controller;

import java.util.Collections;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.auth.UserRegistrationRequest;
import com.example.demo.entity.Customer;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.respository.CustomerRepository;
import com.example.demo.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v2/customer")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CustomerController {
	
	 private final UserService userService;
	    private final CustomerRepository customerRepository;

	    @PostMapping("/register")
	    public ResponseEntity<?> registerCustomer(@RequestBody UserRegistrationRequest registrationRequest) {
	       
	    	System.out.println("ĐĂNG KÝ NGƯỜI DUNG MỚI : "+registrationRequest);
	    	User newUser = new User();
	        newUser.setEmail(registrationRequest.getEmail());
	        newUser.setPassword(registrationRequest.getPassword());
	        userService.saveUser(newUser);
	        
	        userService.addToUser(newUser.getEmail(), "ROLE_USER");



	        Customer newCustomer = new Customer();
	        
	        newCustomer.setUser(newUser);
	        newCustomer.setFullname(registrationRequest.getFullname());
	        newCustomer.setPhone(registrationRequest.getPhone());

	        customerRepository.save(newCustomer);

	        return ResponseEntity.ok("Đăng ký thành công");
	    }

}
