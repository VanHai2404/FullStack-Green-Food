package com.edu.shop.dto;

import java.util.Date;
import java.util.Set;

import com.edu.shop.domain.Account;
import com.edu.shop.domain.Post;
import com.edu.shop.domain.Product;
import com.edu.shop.domain.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {

	private Integer accountId;

	private String username;

	private String fullname;

	private String image;

	private Date birthday;

	private Date createDate;

	private Date updateDate;

	private String phone;

	private String gender;

}
