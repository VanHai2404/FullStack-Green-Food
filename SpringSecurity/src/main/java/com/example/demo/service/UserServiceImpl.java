package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.respository.RoleRespository;
import com.example.demo.respository.UserRespository;

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
		User user = userrespository.findByEmail(username).get();
		Role role =roleRespository.findByName(roleName);
		user.getRoles().add(role);
		
	}

}
