import React from 'react';
import close from '../../../assets/images/Logo/close.png';
import couponTag from '../../../assets/images/Logo/couponTag.png';
import redirect from '../../../assets/images/Logo/redirect.svg';
import truck from '../../../assets/images/Logo/truck.png';
import {AiOutlineDoubleRight,AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import './cart.css'

const ModelCart = ({toggleCart}) => {
  return (
    <div className="miniKartCont" id="cart-container">
      <div style={{ width: '74%', position: 'fixed', height: '100vh', top: 0, left: 0 }}></div>
      <div className="miniKart miniKartOver">
        <div className="minKart_strip d-flex align-items-center py-4 px-4" tabIndex="0" style={{ background: 'rgb(115, 183, 125)' }}>
          <span tabIndex="0">
            <img src={redirect} data-bs-toggle="tooltip" data-bs-placement="top" title="Go to Main Cart Page" alt="" className="me-3" style={{ width: '1.2rem', outline: 'none' }} />
          </span>
          <span style={{ cursor: 'pointer' }} tabIndex="0">
            <span style={{ cursor: 'pointer' }}>My Cart</span> (3 items)
          </span>
          <div style={{ position: 'absolute', top: '20px', right: '15px', alignItems: 'center' }}>
            <img src={close} alt="" style={{ cursor: 'pointer', width: '1rem', outline: 'none' }} id="close-button" onClick={toggleCart} />
          </div>
        </div>
        <div style={{ padding: '0 10px 10px', width: '98%', marginBottom: '-4%', marginTop: '4%' }}>
          <div className="top-area">
            <img src={truck} alt="delivery" /> Chúc mừng! Bạn đủ điều kiện để được giao hàng miễn phí
          </div>
        </div>
        <div className="minikart_main">
    <div className="miniKart_pricing py-4" style={{ paddingBottom: "35px !important" }}>
        <div id="total_mrp" className="d-flex">
            <span> Tổng phụ</span>
            <span>276.2 VND</span>
        </div>
        <div className="d-flex cartSaving">
            <span>Bạn lưu</span>
            <span>- 6.3 VND</span>
        </div>
        <div id="subtotal" className="d-flex">
            <span>Sub Total</span>
            <span> 269 VND.9 </span>
        </div>
        <div className="d-flex">
            <span>Phí vận chuyển</span>
            <span> Free </span>
            
        </div>
        <div className="d-flex" style={{ position: "relative" }}>
            <span style={{ fontWeight: 550, fontSize: "12px" }}>Tổng cộng</span>
            <span style={{ fontWeight: 550, fontSize: "12px" }}> 269.9 VND</span>
        </div>
    </div>
    {/* SẢN PHẨM TRONG CART START */}
    <div className="miniKart-product px-4 d-flex py-2">
        <div className="img-wrap">
            <div style={{ height: "100%" }}>
                <img alt="image of product" className="img-fluid m-auto" style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }} src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/product/3000157224424.jpg&amp;width=300&amp;resourceKey=pWVdUiFHtKGqyJxESltt" />
            </div>
        </div>
        <div className="text-wrap my-auto">
            <span className="product-off mb-1"> 28% off </span>
            <h2 className="mb-1">Giỏ ghen tị đỏ - 3000157224424</h2>
            <div className="d-flex pricingDiv align-items-baseline justify-content-between" style={{ borderTop: "none !important", paddingTop: "0px !important" }}>
                <div className="add-remove d-flex align-items-center">
                   <AiOutlineMinus id="fa-solid"/>
                    <span style={{ margin: "0 8px", fontSize: ".9rem" }}>1</span>
                      <AiOutlinePlus  id="fa-solid"/>
                   
                </div>
                <div className="minikart-pricing">
                    <span style={{ color: "rgb(115, 183, 125)" }}> 250 VND <span >/</span><span id="priceUnit1" style={{ textTransform: "capitalize" }}>PCS</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* SẢN PHẨM TRONG CART END */}
    {/* SẢN PHẨM TRONG CART START */}
    <div className="miniKart-product px-4 d-flex py-2">
        <div className="img-wrap">
            <div style={{ height: "100%" }}>
                <img alt="image of product" className="img-fluid m-auto" style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }} src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/product/3000157224424.jpg&amp;width=300&amp;resourceKey=pWVdUiFHtKGqyJxESltt" />
            </div>
        </div>
        <div className="text-wrap my-auto">
            <h2 className="mb-1">Giỏ ghen tị đỏ - 3000157224424</h2>
            <div className="d-flex pricingDiv align-items-baseline justify-content-between" style={{ borderTop: "none !important", paddingTop: "0px !important" }}>
                <div className="add-remove d-flex align-items-center">
                    <AiOutlineMinus id="fa-solid"/>
                    <span style={{ margin: "0 8px", fontSize: ".9rem" }}>1</span>
                    <AiOutlinePlus  id="fa-solid"/>

                </div>
                <div className="minikart-pricing">
                    <span style={{ color: "rgb(115, 183, 125)" }}> 250 VND <span >/</span> 
                    <span id="priceUnit1" style={{ textTransform: "capitalize" }}>PCS</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* SẢN PHẨM TRONG CART END */}
</div>

        {/* Các sản phẩm khác tương tự */}
        <div className="miniKart-coupon px-3 py-2 mb-2 d-flex align-items-center shadow-sm mt-2" tabIndex="0">
          <img src={couponTag} alt="" className="me-2" />
          ÁP DỤNG PHIẾU GIẢM GIÁ <AiOutlineDoubleRight className='ms-auto'/> 
        </div>
        <div className="minikart_footer px-4 py-4">
          <button className="btn" style={{ background: 'rgb(115, 183, 125)', color: 'rgb(255, 255, 255)' }}>
            <a>Proceed to Checkout</a>
            <a>269 VND.2</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCart;
