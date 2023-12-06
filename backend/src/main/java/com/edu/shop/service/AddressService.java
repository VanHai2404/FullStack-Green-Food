package com.edu.shop.service;

import java.util.List;
import java.util.Optional;

import com.edu.shop.domain.Address;

public interface AddressService {

	void deleteAll();

	List<Address> findByCustomerId(Integer customerId);

	Address getById(Long id);

	void deleteById(Long id);

	Optional<Address> findById(Long id);

	List<Address> findAll();

	<S extends Address> S save(S entity);

}
