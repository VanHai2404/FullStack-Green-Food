package com.example.demo.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User implements UserDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(length = 30)
	private String username;

	@Column(columnDefinition = "nvarchar(100) not null")
	private String fullname;
	@Column(length = 60, nullable = false)
	private String password;
	@Column(length = 100)
	private String email;
	@Column(length = 200)

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id", 
	referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
	private Set<Role> roles;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		 Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		 roles.stream().forEach(i-> authorities.add(new SimpleGrantedAuthority(i.getName())));
		return List.of(new SimpleGrantedAuthority(authorities.toString()));
	}
	
	@Override
	public String getUsername() {
	    return this.username;
	}

	@Override
	public String getPassword() {
	    return this.password;
	}

	
	@Override
	public boolean isAccountNonExpired() {
	    return true; // hoặc triển khai kiểm tra logic của bạn ở đây
	}

	@Override
	public boolean isAccountNonLocked() {
	    return true; // hoặc triển khai kiểm tra logic của bạn ở đây
	}

	@Override
	public boolean isCredentialsNonExpired() {
	    return true; // hoặc triển khai kiểm tra logic của bạn ở đây
	}

	@Override
	public boolean isEnabled() {
	    return true; // hoặc triển khai kiểm tra logic của bạn ở đây
	}


	

}
