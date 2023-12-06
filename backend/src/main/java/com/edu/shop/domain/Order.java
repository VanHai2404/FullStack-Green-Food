package com.edu.shop.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "orderId")
public class Order implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderId;
	@Temporal(TemporalType.DATE)
	private Date orderDate;

	@Column(nullable = false)
	private Double amount;
	@Column(columnDefinition = "nvarchar(100) not null")
	private String note;

	@Column(nullable = false)
	private Short status;

	@ManyToOne
	@JoinColumn(name = "customerId")
	private Customer customer;

	@OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
	private PayMent payMent;

	@OneToOne
	@JoinColumn(name = "addressId")
	private Address address;

	@OneToOne
	@JoinColumn(name = "voucher_id")
	private Voucher voucher;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<OrderDetail> orderDetails;

}
