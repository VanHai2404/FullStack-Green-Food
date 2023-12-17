package com.edu.shop.model.request;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class CustomerRequest {
	

	private String username;

	private String fullname;

	private String gender;
	
	private String phone;
	
   @DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dateOfBirth;

}
