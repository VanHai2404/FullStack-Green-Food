// CartPage.js
import React, { useState } from 'react';
import './CartPage.css'
import CartComponent from '../../../components/ModalCart/Cart';
import bike from '../../../assets/images/Logo/bike.png';


const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
          productId: 1043189415,
          variantId: 1094567281,
          name: 'Việt quất New Zealand',
          variant: '01 hộp',
          price: '240,000₫',
          imageSrc: 'image/việt_Quất.jpg',
          quantity: 1,
          totalPrice: '240,000₫',
        },
        {
          productId: 1050985954,
          variantId: 1114663367,
          name: 'Táo Hirosaki Fuji Nhật Bản',
          variant: '02 quả / 22*16*5 (cm)',
          price: '629,000₫',
          imageSrc: 'image/táo.jpg',
          quantity: 1,
          totalPrice: '629,000₫',
        },
      ]);
      const removeFromCart = (productId, variantId) => {
        const updatedCart = cartItems.filter((item) => !(item.productId === productId && item.variantId === variantId));
        setCartItems(updatedCart);
      };
    
      const updateQuantity = (productId, variantId, newQuantity) => {
        const updatedCart = cartItems.map((item) =>
          item.productId === productId && item.variantId === variantId ? { ...item, quantity: newQuantity, totalPrice: `${newQuantity * parseFloat(item.price.replace('₫', '').replace(',', ''))}₫` } : item
        );
        setCartItems(updatedCart);
      };


  return (
<div className="wrapperMain_content">
  <div id="layout-cart">
    <div className="wrapper-mainCart">
      <div className="content-bodyCart">
        <div className="container">
          <div className="row" style={{paddingTop:"20px"}}>
            <div
              className="col-lg-8 col-md-12 col-12 contentCart-detail"
              style={{ marginTop: 10 }}
            >
              <div className="mainCart-detail">
                <h1
                  className="heading-cart"
                  style={{ borderBottom: "1px solid #eae4e8" }}
                >
                  Giỏ hàng của bạn
                </h1>
                <div className="list-pageform-cart">
                    {/* form */}
             <CartComponent cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                </div>
              </div>
              {/* <div className="section-product">
                <div className="productViewed-title">
                  <h2>SẢN PHẨM ĐƯỢC YÊU THÍCH NHẤT</h2>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-12 col-12 sidebarCart-sticky">
              <div className="wrap-order-summary" style={{ marginTop: "-5px" }}>
                <div className="order-summary-block">
                  <h2 className="summary-title">Thông tin đơn hàng</h2>
                  <div className="summary-time summary-picktime">
                    <div className="summary-time__row">
                      <div className="boxtime-title">
                        <p className="txt-title">Thời gian giao hàng</p>
                        <p className="txt-time ">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          <span>Chọn thời gian</span>
                        </p>
                      </div>
                      <div className="boxtime-radio" id="picktime_radio">
                        <div className="radio-item">
                          <input
                            className="input-radio"
                            type="radio"
                            name="timeRadios"
                            id="timeRadios-1"
                            defaultValue="timeNow"
                            style={{ top: 6 }}
                          />
                          <label className="label-radio" htmlFor="timeRadios-1">
                            Giao khi có hàng
                          </label>
                        </div>
                        <div className="radio-item">
                          <input
                            className="input-radio"
                            type="radio"
                            name="timeRadios"
                            id="timeRadios-2"
                            defaultValue="timeDate"
                            style={{ top: 6 }}
                          />
                          <label className="label-radio" htmlFor="timeRadios-2">
                            Chọn thời gian
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="summary-total">
                    <p>
                      Tổng tiền: <span>869,000₫</span>
                    </p>
                  </div>
                  <div className="summary-action">
                    <p>
                      Quý khách mua biếu/ tặng, vui lòng để lại số điện thoại
                      tại phần NOTE trong trang giỏ hàng.
                    </p>
                    <p>
                      Phí vận chuyển và mã giảm giá sẽ được áp dụng ở trang
                      thanh toán.
                    </p>
                    <p>
                      Quý khách vui lòng thanh toán bằng hình thức: Ví VNpay để
                      tối thiểu chi phí giao hàng.
                    </p>
                  </div>
                  <div className="summary-button">
                    <a
                      id="btnCart-checkout"
                      className="checkout-btn btnred "
                      href="#"
                    >
                      THANH TOÁN{" "}
                    </a>
                  </div>
                </div>
                <div className="order-summary-block">
                  <div className="cart-coupon coupon-initial  bgWhite">
                    <div className="title-coupon">
                      <h2>Khuyến mãi dành cho bạn</h2>
                    </div>
                    <div
                      className="owl-carousel owlCarousel-style owl-loaded owl-drag"
                      id="sliderCouponCart"
                    >
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: 567
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "283.062px" }}
                          >
                            <div className="row-coupon">
                              <div className="col-12 col-md-6 col-xl-12 coupon-item">
                                <div className="coupon-item__inner">
                                  <div
                                    className="coupon-item__left"
                                    style={{
                                      borderRight: "1px dashed #eae4e8"
                                    }}
                                  >
                                    <div
                                      className="cp-img boxlazy-img"
                                      style={{ backgroundColor: "#f1c150" }}
                                    >
                                      <span className="boxlazy-img__insert">
                                        <img
                                          className=" ls-is-cached lazyloaded"
                                          data-src="#"
                                          src={bike}
                                          alt="Miễn phí vận chuyển đơn hàng từ 500.000đ"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="coupon-item__right">
                                    <button
                                      type="button"
                                      className="cp-icon"
                                      title=""
                                      data-original-title="Miễn phí vận chuyển đơn hàng từ 500.000đ "
                                    ></button>
                                    <div className="cp-top">
                                      <h3>
                                        Miễn phí vận chuyển đơn hàng từ 500.000đ
                                      </h3>
                                      <p>Đơn hàng từ 500.000đ</p>
                                    </div>
                                    <div className="cp-bottom">
                                      <div className="cp-bottom-detail">
                                        <p>
                                          Mã: <strong>FREESHIP-01</strong>{" "}
                                        </p>
                                        <p>HSD: </p>
                                      </div>
                                      <div className="cp-bottom-btn">
                                        <button
                                          className="hz"
                                          data-coupon="FREESHIP-01"
                                        >
                                          Sao chép mã
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default CartPage;
