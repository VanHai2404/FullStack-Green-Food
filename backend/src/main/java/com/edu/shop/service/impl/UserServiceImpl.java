package com.edu.shop.service.impl;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edu.shop.domain.Role;
import com.edu.shop.domain.User;
import com.edu.shop.repository.RoleRespository;
import com.edu.shop.repository.UserRespository;
import com.edu.shop.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl  implements UserService{
	@Autowired
	private  UserRespository userrespository;
	
	@Autowired
	private RoleRespository roleRespository;
	
	private final PasswordEncoder passwordEncoder;

	@Override
	public User saveUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userrespository.save(user);
	}

	@Override
	public Role saveRole(Role role) {
		return roleRespository.save(role);
		
	
	}

	@Override
	public void addToUser(String username, String roleName) {
		System.out.println("username: "+username +"ROLE: "+roleName);
		
		User user = userrespository.findByEmail(username).get();
		Role role =roleRespository.findByName(roleName);
		System.out.println("TIM THẤY "+user);
		System.out.println("TIM THẤY role "+role);
		 if (user.getRoles() == null) {
		        user.setRoles(new HashSet<>());
		    }

		user.getRoles().add(role);
		
	}


}