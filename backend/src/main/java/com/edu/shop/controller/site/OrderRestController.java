package com.edu.shop.controller.site;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.edu.shop.domain.Order;
import com.edu.shop.model.request.CartItemsRequest;
import com.edu.shop.model.request.InvoiceRequest;
import com.edu.shop.service.OrderService;
import com.edu.shop.service.VNPayService;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins = "http://localhost:3001")
public class OrderRestController {
	
	
	   @Autowired
	    private VNPayService vnPayService;
	   
	   @Autowired
	   private OrderService orderService;
	   
	   @Autowired
	   private HttpServletRequest request;

	   
	   
	   @PostMapping("/cart/createInvoice")
	   public ResponseEntity<Object> createInvoice(@RequestBody InvoiceRequest invoiceRequest,
	                                              @RequestBody CartItemsRequest[] cartItemsRequest) throws UnsupportedEncodingException {
	       Order ordersave;
	       String redirectUrl = "";

	       if (invoiceRequest.getPayMentMethod() == 1) {
	           // Xử lý khi sử dụng phương thức thanh toán bằng tiền mặt
	           ordersave = orderService.createOrder(cartItemsRequest, invoiceRequest);
	           // Trả về ID của hóa đơn
	           return ResponseEntity.ok().body(Map.of("id", ordersave.getOrderId()));
	       } else if (invoiceRequest.getPayMentMethod() == 2) {
	           // Xử lý khi sử dụng phương thức thanh toán qua VNPay
	           redirectUrl = vnPayService.createPayment(invoiceRequest.getAmont(), request);
	           // Trả về URL thanh toán
	           return ResponseEntity.ok().body(Map.of("url", redirectUrl));
	       } else {
	           return ResponseEntity.badRequest().body("Phương thức thanh toán không được hỗ trợ: " + invoiceRequest.getPayMentMethod());
	       }
	   }




	   

}
