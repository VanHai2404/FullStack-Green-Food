package com.edu.shop.controller.admin;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.shop.domain.Voucher;
import com.edu.shop.service.VoucherService;

@RestController
@RequestMapping("/api/admin/vouchers")
@CrossOrigin(origins = "http://localhost:3000")
public class VoucherRestController {
	 @Autowired
	 VoucherService voucherService;
	 
	    @GetMapping
	    public List<Voucher> getAllVouchers() {
	        return voucherService.getAllVouchers();
	    }
	    
	    @GetMapping("/{id}")
	    public Voucher getVoucherById(@PathVariable Long id) {
	        return voucherService.getVoucherById(id);
	    }
	    @PostMapping
	    public Voucher createVoucher(@RequestBody Voucher voucher) {
	        return voucherService.saveVoucher(voucher);
	    }
	    @PutMapping("/{id}")
	    public Voucher updateVoucher(@PathVariable Long id, @RequestBody Voucher updatedVoucher) {
	        Voucher voucher = voucherService.getVoucherById(id);
	        if (voucher != null) {
	            // Update voucher properties here
	            voucher.setName(updatedVoucher.getName());
	            // Update other properties as needed
	            voucherService.saveVoucher(voucher);
	        }
	        return voucher;
	    }
	    @DeleteMapping("/{id}")
	    public void deleteVoucher(@PathVariable Long id) {
	    	voucherService.deleteVoucher(id);
	    }

}
