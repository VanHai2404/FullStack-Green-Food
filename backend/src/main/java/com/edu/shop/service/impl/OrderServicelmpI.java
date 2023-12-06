package com.edu.shop.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.edu.shop.constants.OrderStatus;
import com.edu.shop.constants.PaymentMethod;
import com.edu.shop.constants.PaymentStatus;
import com.edu.shop.domain.Address;
import com.edu.shop.domain.Customer;
import com.edu.shop.domain.Order;
import com.edu.shop.domain.OrderDetail;
import com.edu.shop.domain.PayMent;
import com.edu.shop.domain.Product;
import com.edu.shop.model.dto.AddressDTO;
import com.edu.shop.model.dto.OrderDto;
import com.edu.shop.model.request.CartItemsRequest;
import com.edu.shop.model.request.InvoiceRequest;
import com.edu.shop.repository.OrderRepostory;
import com.edu.shop.repository.PayMentRepostory;
import com.edu.shop.service.AddressService;
import com.edu.shop.service.CustomerService;
import com.edu.shop.service.OrderService;
import com.edu.shop.service.OrderdetailService;
import com.edu.shop.service.PayMentService;
import com.edu.shop.service.ProductService;

import jakarta.transaction.Transactional;

@Service
public class OrderServicelmpI implements OrderService {

	@Autowired
	OrderRepostory repostory;

	@Autowired
	private CustomerService customerService;

	@Autowired
	private ProductService productService;

	@Autowired
	private OrderService orderService;

	@Autowired
	private OrderdetailService orderDetailService;

	@Autowired
	private AddressService addressService;

	@Autowired
	private PayMentService payMentService;

	@Override
	@Transactional
	public Order createOrder(CartItemsRequest[] cartItemsRequest, InvoiceRequest invoiceRequest) {
		if (cartItemsRequest.length < 1) {
			return null;
		}
		Order order = new Order();
		Date date = new Date();
		OrderDto dto = new OrderDto();
		dto.setOrderDate(date);
		dto.setAmount(invoiceRequest.getAmont());
		dto.setStatus(OrderStatus.WAITING);
		BeanUtils.copyProperties(dto, order);

		String email = invoiceRequest.getEmail();
		Optional<Customer> optional = customerService.findByEmail(email);
		if (optional.isPresent()) {
			Customer customer = optional.get();
			order.setCustomer(customer);
		} else {
			return null;
		}
		Customer customer = optional.get();
		Set<Address> addresses = customer.getAddress();
		if (!addresses.isEmpty()) {
			Address address = addresses.iterator().next();
			order.setAddress(address);
		} else {
			Address address = new Address();

			AddressDTO addressDTO = new AddressDTO();
			addressDTO.setCode(invoiceRequest.getCode());
			addressDTO.setCity(invoiceRequest.getCity());
			addressDTO.setDistrict(invoiceRequest.getDistrict());
			addressDTO.setStreetNumber(invoiceRequest.getStreetNumber());
			BeanUtils.copyProperties(addressDTO, address);
			address.setCustomer(optional.get());
			Address addressSave = addressService.save(address);
			order.setAddress(addressSave);

		}

		// Create and save payment
		PayMent payment = new PayMent();

		payment.setAmount(invoiceRequest.getAmont());
		payment.setPayDate(date);
		payment.setTimestamp(System.currentTimeMillis());

		// Set payment method based on the provided value
		int paymentMethodValue = invoiceRequest.getPayMentMethod();
		if (paymentMethodValue == 1) {
			payment.setPaymentMethod(PaymentMethod.CASH);
		} else if (paymentMethodValue == 2) {
			payment.setPaymentMethod(PaymentMethod.VNPAY);
		}
		PayMent paymentSave = payMentService.save(payment);
		order.setPayMent(paymentSave);
		Order savedOrder = orderService.save(order);
		processOrderDetails(cartItemsRequest, savedOrder);
		return savedOrder;
	}

	private void processOrderDetails(CartItemsRequest[] cartItemsRequest, Order order) {
		for (CartItemsRequest cartItem : cartItemsRequest) {
			OrderDetail detail = new OrderDetail();
			Optional<Product> product = productService.findById(cartItem.getProductId());
			// Set Order for OrderDetail
			detail.setOrder(order);
			// Set details of the product
			detail.setName(cartItem.getName());
			detail.setDiscount(cartItem.getDiscount());
			detail.setProduct(product.get());
			detail.setQuantity(cartItem.getQuantity());
			detail.setUnitPrice(product.get().getSalePrice());
			detail.setDiscount(product.get().getDiscount());
			// Save OrderDetail
			orderDetailService.save(detail);
			// Update product quantity in the inventory
			product.get().setQuantity(product.get().getQuantity() - cartItem.getQuantity());
			productService.save(product.get());
		}
	}

	
	
	
	@Override
	public <S extends Order> S save(S entity) {
		return repostory.save(entity);
	}

	@Override
	public <S extends Order> Optional<S> findOne(Example<S> example) {
		return repostory.findOne(example);
	}

	@Override
	public List<Order> findAll(Sort sort) {
		return repostory.findAll(sort);
	}

	@Override
	public void flush() {
		repostory.flush();
	}

	@Override
	public Page<Order> findAll(Pageable pageable) {
		return repostory.findAll(pageable);
	}

	@Override
	public List<Order> findAll() {
		return repostory.findAll();
	}

	@Override
	public Optional<Order> findById(Integer id) {
		return repostory.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return repostory.existsById(id);
	}

	@Override
	public void deleteAllInBatch() {
		repostory.deleteAllInBatch();
	}

	@Override
	public Order getOne(Integer id) {
		return repostory.getOne(id);
	}

	@Override
	public long count() {
		return repostory.count();
	}

	@Override
	public void deleteById(Integer id) {
		repostory.deleteById(id);
	}

	@Override
	public Order getById(Integer id) {
		return repostory.getById(id);
	}

	@Override
	public void delete(Order entity) {
		repostory.delete(entity);
	}

	@Override
	public void deleteAll() {
		repostory.deleteAll();
	}

}
