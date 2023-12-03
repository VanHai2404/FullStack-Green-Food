package com.example.demo;

import java.util.HashSet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import jakarta.persistence.Column;

@SpringBootApplication
@EnableWebSecurity
@EnableJpaRepositories
public class SpringSecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityApplication.class, args);
	}
	
	@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
//	@Bean
//	CommandLineRunner run(UserService userService) {
//		return args ->{
//			userService.saveRole(new Role(null,"ROLE_USER"));
//			userService.saveRole(new Role(null,"ROLE_MANAGER"));
//			userService.saveRole(new Role(null,"ROLE_ADMIN"));
//			userService.saveRole(new Role(null,"ROLE_STAFF"));
//			
//			
//			userService.saveUser(new User(null,"hai","Hồ Văn Hải","123","hai@gamil.com",new HashSet<>()));
//			userService.saveUser(new User(null,"vu","Hồ Văn vu","123","vu@gamil.com",new HashSet<>()));
//			
//			
//			userService.addToUser("hai@gamil.com", "ROLE_USER");
//			userService.addToUser("hai@gamil.com", "ROLE_MANAGER");
//			
//			userService.addToUser("vu@gamil.com", "ROLE_ADMIN");
//
//
//		};
//	}

}
