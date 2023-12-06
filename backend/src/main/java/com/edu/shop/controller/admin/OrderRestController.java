package com.edu.shop.controller.admin;
import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.edu.shop.domain.Order;
import com.edu.shop.service.OrderService;

@RestController
@RequestMapping("/api/admin/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderRestController {

    public static final short PENDING = 0;
    public static final short CONFIRMED = 1;
    public static final short COMPLETED = 2;

    @Autowired
    OrderService orderService;

    @GetMapping("/confirmation")
    public ResponseEntity<List<Order>> getPendingOrders() {
        List<Order> orders = findOrdersByStatus(PENDING);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/shipping")
    public ResponseEntity<List<Order>> getConfirmedOrders() {
        List<Order> orders = findOrdersByStatus(CONFIRMED);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/page")
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam("page") Optional<Integer> page,
                                                    @RequestParam("size") Optional<Integer> size) {
        int currentPage = page.orElse(0).intValue();
        int pageSize = size.orElse(5).intValue();
        Pageable pageable = PageRequest.of(currentPage, pageSize);
        Page<Order> resultPage = orderService.findAll(pageable);

        if (resultPage != null) {
            List<Order> orders = resultPage.getContent();
            return ResponseEntity.ok(orders);
        } else {
            // Xử lý khi resultPage là null, ví dụ: ném một ngoại lệ hoặc trả về thông báo lỗi
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<String> confirmOrder(@RequestParam("orderId") Integer orderId,
                                              @RequestParam("inputState") Short selectedStatus) {
        return updateOrderStatus(orderId, selectedStatus);
    }

    @PostMapping("/ship")
    public ResponseEntity<String> shipOrder(@RequestParam("orderId") Integer orderId,
                                           @RequestParam("inputState") Short selectedStatus) {
        return updateOrderStatus(orderId, selectedStatus);
    }

    private ResponseEntity<String> updateOrderStatus(Integer orderId, Short selectedStatus) {
        Optional<Order> opt = orderService.findById(orderId);

        if (opt.isPresent()) {
            opt.get().setStatus(selectedStatus);
            orderService.save(opt.get());
            return ResponseEntity.ok("Đơn hàng đã được cập nhật.");
        }

        return ResponseEntity.notFound().build();
    }

    private List<Order> findOrdersByStatus(short status) {
        List<Order> orders = orderService.findAll();
        return orders.stream()
                .filter(order -> order.getStatus() == status)
                .collect(Collectors.toList());
    }
}