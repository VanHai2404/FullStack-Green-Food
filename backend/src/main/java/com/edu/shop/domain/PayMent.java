package com.edu.shop.domain;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "payments")
public class PayMent implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int paymentId;
	@Column(nullable = false)
//	private int orderId;
//	@Column(nullable = false)
	private int PayMentMethod;
	@Temporal(TemporalType.DATE)
	private Date PaymentDate;
	private float amount;
	@Temporal(TemporalType.DATE)
	private Date payDate;
	@Temporal(TemporalType.DATE)
	private Date Timestamp;
	private Integer Status;

	@OneToOne
	@JoinColumn(name = "orderId")
	private Order order;

}
