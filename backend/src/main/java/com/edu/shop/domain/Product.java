package com.edu.shop.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import com.edu.shop.constants.ProductUnit;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "products")
public class Product implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer productId;

	@Column(columnDefinition = "nvarchar(100) not null")
	private String name;

	@Column(nullable = false)
	private Integer quantity;

	@Column(nullable = false)
	private Double untiPrice;

	@Column(length = 200)
	private String image;

	@Column(columnDefinition = "nvarchar(1000) not null")
	private String description;

	@Column(columnDefinition = "nvarchar(100)")
	private String metaKeywords;
	@Column(nullable = true)
	private Double discount;

	@Temporal(TemporalType.DATE)
	private Date enterdDate;

	@Temporal(TemporalType.DATE)
	private Date UpdateDate;

	@Temporal(TemporalType.DATE)
	private Date hot;

	private Integer ViewCount;

//	private Integer CreatedBy;

	@Column(nullable = true)
	private Short status;

	@Enumerated(EnumType.STRING)
	@Column(length = 3) // Độ dài tối đa của Enum (ví dụ: "GOI", "KG", "CAI")
	private ProductUnit unit; // Đơn vị sản phẩm, sử dụng Enum ProductUnit

	@ManyToOne
	@JoinColumn(name = "suppllierId")
	private Supplier supplier;

	@ManyToOne
	@JoinColumn(name = "accountId")
	private Account account;

	@ManyToOne
	@JoinColumn(name = "categoryId")
	private Category category;
	

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductImage> images;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	private Set<OrderDetail> orderDetails;

}
