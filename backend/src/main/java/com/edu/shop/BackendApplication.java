package com.edu.shop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import com.edu.shop.config.StorageProperties;
import com.edu.shop.service.StorageService;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class BackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
	CommandLineRunner init(StorageService storageService) {
		return(args ->{
			storageService.init();
			
		});
		
	}

}
