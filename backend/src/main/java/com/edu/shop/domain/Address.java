package com.edu.shop.domain;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "addresses")
public class Address implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer addressId;
	@Column(columnDefinition = "nvarchar(100) null")
	private String city;
	@Column(columnDefinition = "nvarchar(100) null")
	private String district;
	@Column(columnDefinition = "nvarchar(100) null")
	private String village;
	@Column(columnDefinition = "nvarchar(100) null")
	private String Street;
	@Column(length = 20)
	private String Phone;

	@ManyToOne
	@JoinColumn(name = "customerId")
	private Customer customer;

}
