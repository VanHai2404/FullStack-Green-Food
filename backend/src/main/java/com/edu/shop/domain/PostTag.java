package com.edu.shop.domain;

import java.io.Serializable;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "post_tag")
public class PostTag implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "postId", nullable = false)
	private Post post;

	@ManyToOne
	@JoinColumn(name = "tag_id", nullable = false)
	private Tag tag;
	

	@OneToMany(mappedBy = "postTag", cascade = CascadeType.ALL)
	private Set<Post> posts;

	// Constructors, getters, and setters
}