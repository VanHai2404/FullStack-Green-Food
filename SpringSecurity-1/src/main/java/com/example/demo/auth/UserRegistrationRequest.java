package com.example.demo.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class UserRegistrationRequest {
        
		private String email;
		private String password;
		private String username;
		private String fullname;
		private String phone;
		

	

}
