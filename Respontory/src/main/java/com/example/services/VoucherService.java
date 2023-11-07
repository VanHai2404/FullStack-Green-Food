package com.example.services;

import java.util.List;

import com.example.entities.Voucher;

public interface VoucherService {
    Voucher saveVoucher(Voucher voucher);
    Voucher getVoucherById(Integer id);
    List<Voucher> getAllVouchers();
    void deleteVoucher(Integer id);
}
