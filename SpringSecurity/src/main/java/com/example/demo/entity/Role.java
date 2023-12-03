package com.example.demo.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "roles")
public class Role implements Serializable {

	@Id
	@SequenceGenerator(name = "roles_sequence", sequenceName = "roles_sequence", allocationSize = 1

	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "roles_sequence")
	private Long id;

	private String name;

	public Role(Long id, String name) {

		this.id = id;
		this.name = name;
	}

	public Role(String name) {

		this.name = name;
	}

}