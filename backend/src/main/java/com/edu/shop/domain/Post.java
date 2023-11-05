package com.edu.shop.domain;

import java.io.Serializable;

import java.util.Date;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "posts")
public class Post implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer postId;
	@Column(columnDefinition = "nvarchar(200) not null")
	private String name;
	@Column(columnDefinition = "nvarchar(100) null")
	private String image;
	@Column(columnDefinition = "TEXT")
	private String description;
	@Column(columnDefinition = "nvarchar(200) not null")
	private String metaKeywords;
	@Column(columnDefinition = "nvarchar(200) not null")
	private String metaDescription;
	@Column(length = 10)
	private Boolean status;
	@Column(length = 10000)
	private Integer viewCount;
	@Temporal(TemporalType.DATE)
	private Date createDate;
	@Temporal(TemporalType.DATE)
	private Date updateDate;
	
	@ManyToOne
	@JoinColumn(name = "accountId")
	private Account account;
	
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	private Set<PostComment> postComments;
	
	

}
