// src/components/DeliveryInformation.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentMethod = ( {total} ) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);


    const handlePayment = () => {
        if (selectedPaymentMethod !== null) {
          console.log('Selected payment method:', selectedPaymentMethod);
          console.log('Total:', total);
          // Further logic based on the selected payment method
        } else {
            toast.error('Vui long chọn phường thức thành toán !', { position: toast.POSITION.TOP_RIGHT });

        }
      };
      
  const handlePaymentMethodChange = (paymentMethodId) => {
    setSelectedPaymentMethod(paymentMethodId);
  };
    return (
        <div className="step">
            <div className="step-sections " step={2}>
                <div id="section-payment-method" className="section">
                    <div className="order-checkout__loading--box">
                        <div className="order-checkout__loading--circle" />
                    </div>
                    <div className="section-header">
                        <h2 className="section-title">Phương thức thanh toán</h2>
                    </div>
                    <div className="section-content">
                        <div className="content-box">
                            <div className="radio-wrapper content-box-row">
                                <label className="two-page" >
                                    <div className="radio-input payment-method-checkbox">
                                        <input
                                            type-id={1}
                                            className="input-radio"
                                            name="payment_method_id"
                                            type="radio"
                                            onChange={() => handlePaymentMethodChange(1)}
                                        />
                                    </div>
                                    <div className="radio-content-input">
                                        <img
                                            className="main-img"
                                            src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6"
                                        />
                                        <div className="content-wrapper">
                                            <span className="radio-label-primary">
                                                Thanh toán khi giao hàng (COD)
                                            </span>
                                            <span className="quick-tagline hidden" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="radio-wrapper content-box-row">
                                <label className="two-page">
                                    <div className="radio-input payment-method-checkbox">
                                        <input
                                            className="input-radio"
                                            name="payment_method_id"
                                            type="radio"
                                            onChange={() => handlePaymentMethodChange(2)}                                       
                                        />
                                    </div>
                                    <div className="radio-content-input">
                                        <img
                                            className="main-img"
                                            src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=6"
                                        />
                                        <div className="content-wrapper">
                                            <span className="radio-label-primary">
                                                Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY
                                            </span>
                                            <span className="quick-tagline hidden" />
                                            <img
                                                className="child-img"
                                                src="https://hstatic.net/0/0/global/design/seller/image/payment/atm_visa_master_jcb.svg?v=6"
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="step-footer" id="step-footer-checkout">
                    <button
                        type="submit"
                        className="step-footer-continue-btn btn"
                        onClick={() => handlePayment()}
                       
                    >
                        <span className="btn-content">Hoàn tất đơn hàng</span>
                        <i className="btn-spinner icon icon-button-spinner" />
                    </button>
                <a className="step-footer-previous-link" href="/cart">
                    Giỏ hàng
                </a>
            </div>
        </div>

    );
};

export default PaymentMethod;
