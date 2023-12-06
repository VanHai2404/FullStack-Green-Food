package com.edu.shop.service;

import java.util.List;

import com.edu.shop.domain.Voucher;

public interface VoucherService {

	void deleteVoucher(Long id);

	List<Voucher> getAllVouchers();

	Voucher getVoucherById(Long id);

	Voucher saveVoucher(Voucher voucher);

}
