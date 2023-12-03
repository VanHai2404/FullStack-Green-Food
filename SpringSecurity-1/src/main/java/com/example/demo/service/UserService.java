package com.example.demo.service;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;

import lombok.val;

public interface UserService {
	
	User saveUser(User user);
	
	Role saveRole (Role role);
	
	void addToUser(String username , String roleName);
	

}
