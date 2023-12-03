package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.AuthenticationService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/demo")
@RequiredArgsConstructor
public class AdminController {
	@GetMapping("test")
	public ResponseEntity<String> heloAdmin() {
		return ResponseEntity.ok("AUTHENTICATION AND AUTHORIZATION is SUCCCE");
	}

}
