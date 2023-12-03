package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.auth.AuthenticationRequest;
import com.example.demo.auth.AuthenticationRespose;
import com.example.demo.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v2/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
	
	 private final AuthenticationService authenticationService;
	
	
	@PostMapping("/login")
	public ResponseEntity<AuthenticationRespose> login(@RequestBody AuthenticationRequest authenticationRequest){
		System.out.println("DỮ LIỆU GỬI :  "+authenticationRequest);
		
		System.out.println("DỮ LIỆU GỬI :  "+authenticationService.authenticate(authenticationRequest));
		return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
		
	}

}
