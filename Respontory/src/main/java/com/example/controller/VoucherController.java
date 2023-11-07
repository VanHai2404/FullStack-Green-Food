package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Voucher;
import com.example.repositories.VoucherRepository;

@RestController
@RequestMapping("/api/vouchers")
public class VoucherController {
    @Autowired
    private VoucherRepository voucherRepository;

    @GetMapping
    public List<Voucher> getAllVouchers() {
        return voucherRepository.findAll();
    }

    @GetMapping("/{id}")
    public Voucher getVoucherById(@PathVariable Integer id) {
        return voucherRepository.findById(id).orElse(null);
    }


    @PostMapping
    public Voucher createVoucher(@RequestBody Voucher voucher) {
        return voucherRepository.save(voucher);
    }

    @PutMapping("/{id}")
    public Voucher updateVoucher(@PathVariable Integer id, @RequestBody Voucher updatedVoucher) {
        Voucher voucher = voucherRepository.findById(id).orElse(null);
        if (voucher != null) {
            // Update voucher properties here
            voucher.setName(updatedVoucher.getName());
            // Update other properties as needed
            voucherRepository.save(voucher);
        }
        return voucher;
    }

    @DeleteMapping("/{id}")
    public void deleteVoucher(@PathVariable Integer id) {
        voucherRepository.deleteById(id);
    }
}

