// CheckoutPage.js
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import './CheckoutPage.css';
import DiscountCodeModal from './DiscountCodeModal';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../../redux/actions/cart-action';
const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  useEffect(() => {
    updateTotalAmount();
  }, [cartItems]);















  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };


  const [deliveryOption, setDeliveryOption] = useState('giaoTaiNha'); // 'giaoTaiNha' là giả sử mặc định là giao tận nơi
  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };


  const [totalAmount, setTotalAmount] = useState(0);
  const updateTotalAmount = () => {
    const totalAmount = cartItems.reduce((total, item) => {
      const salePrice = typeof item.salePrice === 'string' ? parseFloat(item.salePrice) : item.salePrice;
      return total + salePrice * item.quantity;
    }, 0);
    setTotalAmount(totalAmount);
  };


  // 
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    // Kiểm tra xem có dữ liệu trong localStorage không
    const storedUserData = localStorage.getItem("customer");

    if (storedUserData) {
      // Nếu có dữ liệu, cập nhật state với dữ liệu từ localStorage
      const parsedUserData = JSON.parse(storedUserData);
      setUserData({
        fullname: parsedUserData.fullname || "",
        email: parsedUserData.email || "",
        phone: parsedUserData.phone || "",
      });
    }
  }, []); // useEffect chỉ chạy một lần sau khi component được render


  return (
    <div className="checkoutPage">
      <div className="wrapper-mainCart" >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-12 col-12 contentCart-detail"
              style={{ marginTop: 10 }}
            >
              <div className="mainCart-detail">
                <div className="list-pageform-cart main">
                  <div className="main-header">
                    <a href="#" className="logo">
                      <h1 className="logo-text">FPT</h1>
                    </a>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Giỏ hàng</a>
                      </li>
                      <li className="breadcrumb-item breadcrumb-item-current">
                        Thông tin giao hàng
                      </li>
                      <li className="breadcrumb-item ">Phương thức thanh toán</li>
                    </ul>
                  </div>
                  <div className="main-content">
                    <div className="step">
                      <div className="step-sections ">
                        <div className="section">
                          <div className="section-header">
                            <h2 className="section-title">Thông tin giao hàng</h2>
                          </div>
                          <div className="section-content section-customer-information ">
                            <p className="section-content-text">
                              Bạn đã có tài khoản?
                              <a href="#">Đăng nhập</a>
                            </p>
                            <div className="fieldset">
                              <div className="field field-required">
                                <div className="field-input-wrapper">
                                  <label className="field-label" htmlFor="">
                                    Họ và tên
                                  </label>
                                  <input
                                    placeholder="Họ và tên"
                                    className="field-input"
                                    size={30}
                                    type="text"
                                    value={userData.fullname}
                                  />
                                </div>
                              </div>
                              <div className="field field-two-thirds">
                                <div className="field-input-wrapper">
                                  <label className="field-label" htmlFor="checkout_user_email">
                                    Email
                                  </label>
                                  <input
                                    placeholder="email"
                                    className="field-input"
                                    size={30}
                                    type="text"
                                    value={userData.email}
                                  />
                                </div>
                              </div>
                              <div className="field field-required field-third">
                                <div className="field-input-wrapper">
                                  <label className="field-label" htmlFor="billing_address_phone">
                                    Số điện thoại
                                  </label>
                                  <input
                                    placeholder="số điện thoại"
                                    className="field-input"
                                    size={30}
                                    type="text"
                                    value={userData.phone}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="section-content">
                            <div className="fieldset">
                              <form
                                className="field "
                                acceptCharset="UTF-8"
                                method="post"
                              >
                                <div className="content-box mt0">
                                  <div className="radio-wrapper content-box-row">
                                    <label className="radio-label">
                                      <div className="radio-input">
                                        <input
                                          type="radio"
                                          name="customer_pick_at_location"
                                          className="input-radio"
                                          value="giaoTaiNha"
                                          checked={deliveryOption === 'giaoTaiNha'}
                                          onChange={handleDeliveryOptionChange}
                                        />
                                      </div>
                                      <span className="radio-label-primary">
                                        Giao tận nơi
                                      </span>
                                    </label>
                                  </div>

                                  {deliveryOption === 'giaoTaiNha' && (
                                    <div className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary ">
                                      <div className="field field-required  ">
                                        <div className="field-input-wrapper">
                                          <label className="field-label">Địa chỉ</label>
                                          <input
                                            placeholder="Địa chỉ"
                                            className="field-input"
                                            size={30}
                                            type="text"
                                            id=""
                                            name=""
                                            
                                          />
                                        </div>
                                      </div>
                                      <div className="field field-show-floating-label field-required field-third ">
                                        <div className="field-input-wrapper field-input-wrapper-select">
                                          <label
                                            className="field-label"
                                            htmlFor="customer_shipping_province"
                                          >
                                            {" "}
                                            Tỉnh / thành{" "}
                                          </label>
                                          <select
                                            className="field-input"
                                            id="customer_shipping_province"
                                            name="customer_shipping_province"
                                          >
                                            <option
                                              data-code="null"
                                              value="null"
                                              selected=""
                                            >
                                              Chọn tỉnh / thành{" "}
                                            </option>
                                            <option data-code="HC" value={50}>
                                              Hồ Chí Minh
                                            </option>
                                            <option data-code="HI" value={1}>
                                              Hà Nội
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="field field-show-floating-label field-required field-third ">
                                        <div className="field-input-wrapper field-input-wrapper-select">
                                          <label className="field-label">
                                            Quận / huyện
                                          </label>
                                          <select
                                            className="field-input"
                                            id="customer_shipping_district"
                                            name="customer_shipping_district"
                                          >
                                            <option
                                              data-code="null"
                                              value="null"
                                              selected=""
                                            >
                                              Chọn quận / huyện
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="field field-show-floating-label field-required  field-third  ">
                                        <div className="field-input-wrapper field-input-wrapper-select">
                                          <label className="field-label">
                                            Phường / xã
                                          </label>
                                          <select
                                            className="field-input"
                                            id="customer_shipping_ward"
                                            name="customer_shipping_ward"
                                          >
                                            <option
                                              data-code="null"
                                              value="null"
                                              selected=""
                                            >
                                              Chọn phường / xã
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div
                                        id="div_location_country_not_vietnam"
                                        className="section-customer-information "
                                      >
                                        <div className="field field-two-thirds">
                                          <div className="field-input-wrapper">
                                            <label className="field-label">
                                              Thành phố
                                            </label>
                                            <input
                                              placeholder="Thành phố"
                                              autoCapitalize="off"
                                              spellCheck="false"
                                              className="field-input"
                                              size={30}
                                              type="text"
                                              id="billing_address_city"
                                              name="billing_address[city]"
                                              
                                            />
                                          </div>
                                        </div>
                                        <div className="field field-third">
                                          <div className="field-input-wrapper">
                                            <label className="field-label">
                                              Mã bưu chính
                                            </label>
                                            <input
                                              placeholder="Mã bưu chính"
                                              autoCapitalize="off"
                                              spellCheck="false"
                                              className="field-input"
                                              size={30}
                                              type="text"
                                              id="billing_address_zip"
                                              name="billing_address[zip]"
                                              
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  <div className="radio-wrapper content-box-row">
                                    <label className="radio-label">
                                      <div className="radio-input">
                                        <input
                                          type="radio"
                                          id="customer_pick_at_location_true"
                                          name="customer_pick_at_location"
                                          className="input-radio"
                                          value="nhanTaiCuaHang"
                                          checked={deliveryOption === 'nhanTaiCuaHang'}
                                          onChange={handleDeliveryOptionChange}
                                        />
                                      </div>
                                      <span className="radio-label-primary">
                                        Nhận tại cửa hàng
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div id="change_pick_location_or_shipping">
                            <div className="inventory_location"></div>
                          </div>
                        </div>
                      </div>
                      <div className="step-footer" id="step-footer-checkout">
                        <form id="form_next_step" method="post">
                          <button
                            type="submit"
                            className="step-footer-continue-btn btn"
                          >
                            <span className="btn-content">
                              Tiếp tục đến phương thức thanh toán
                            </span>
                          </button>
                        </form>
                        <a className="step-footer-previous-link" href="#">
                          Giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div
              className="col-lg-5 col-md-12 col-12 sidebarCart-sticky"
              style={{ marginTop: 10 }}
            >
              <div className="mainCart-detail">
                <div
                  className="list-pageform-cart sidebar"
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <div className="sidebar-content">
                    <div className="order-summary order-summary-is-collapsed">
                      <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                      <div className="order-summary-sections">
                        <div className="order-summary-section order-summary-section-product-list">

                          <table className="product-table">
                            <thead>
                              <tr>
                                <th scope="col">
                                  <span className="visually-hidden">Hình ảnh</span>
                                </th>
                                <th scope="col">
                                  <span className="visually-hidden">Mô tả</span>
                                </th>
                                <th scope="col">
                                  <span className="visually-hidden">Số lượng</span>
                                </th>
                                <th scope="col">
                                  <span className="visually-hidden">Giá</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map((item) => (
                                <tr key={item.productId} className="product">
                                  <td className="product-image">
                                    <div className="product-thumbnail">
                                      <div className="product-thumbnail-wrapper">
                                        <img
                                          className="product-thumbnail-image"
                                          alt={item.name}
                                          src={`http://localhost:8080/api/home/image/${item.image}`}
                                        />
                                      </div>
                                      <span
                                        className="product-thumbnail-quantity"
                                        aria-hidden="true"
                                      >
                                        {item.quantity}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="product-description">
                                    <span className="product-description-name order-summary-emphasis">
                                      {item.name}
                                    </span>
                                    <span className="product-description-variant order-summary-small-text">
                                      {item.supplierName}
                                    </span>
                                  </td>
                                  <td className="product-quantity visually-hidden">
                                    {item.quantity}
                                  </td>
                                  <td className="product-price">
                                    <span className="order-summary-emphasis">
                                      {formatPrice(item.salePrice * item.quantity)}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                        </div>
                        <div className="order-summary-section order-summary-section-discount">
                          <form id="form_discount_add" method="post">
                            <div className="fieldset">
                              <div className="field">
                                <div className="field-input-btn-wrapper">
                                  <div className="field-input-wrapper">
                                    <label className="field-label">Mã giảm giá</label>
                                    <input
                                      placeholder="Mã giảm giá"
                                      className="field-input"
                                      size={30}
                                      type="text"

                                    />
                                  </div>
                                  <button
                                    type="submit"
                                    className="field-input-btn btn btn-default btn-disabled"
                                  >
                                    <span className="btn-content">Sử dụng</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div
                          className="order-summary-section order-summary-section-display-discount"
                          data-order-summary-section="discount-display"
                        >
                          <div>
                            <div onClick={showModal}>
                              <svg
                                width={15}
                                height={10}
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginBottom: '4px' }}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.3337 5.3335V2.00016C17.3337 1.07516 16.5837 0.333496 15.667 0.333496H2.33366C1.41699 0.333496 0.675326 1.07516 0.675326 2.00016V5.3335C1.59199 5.3335 2.33366 6.0835 2.33366 7.00016C2.33366 7.91683 1.59199 8.66683 0.666992 8.66683V12.0002C0.666992 12.9168 1.41699 13.6668 2.33366 13.6668H15.667C16.5837 13.6668 17.3337 12.9168 17.3337 12.0002V8.66683C16.417 8.66683 15.667 7.91683 15.667 7.00016C15.667 6.0835 16.417 5.3335 17.3337 5.3335ZM15.667 4.11683C14.6753 4.69183 14.0003 5.77516 14.0003 7.00016C14.0003 8.22516 14.6753 9.3085 15.667 9.8835V12.0002H2.33366V9.8835C3.32533 9.3085 4.00033 8.22516 4.00033 7.00016C4.00033 5.76683 3.33366 4.69183 2.34199 4.11683L2.33366 2.00016H15.667V4.11683ZM9.83366 9.50016H8.16699V11.1668H9.83366V9.50016ZM8.16699 6.16683H9.83366V7.8335H8.16699V6.16683ZM9.83366 2.8335H8.16699V4.50016H9.83366V2.8335Z"
                                  fill="#318DBB"
                                />
                              </svg>
                              <span>Xem thêm mã giảm giá</span>
                            </div>
                            <DiscountCodeModal visible={modalVisible} onCancel={handleCancel} />

                          </div>
                        </div>

                        <div
                          className="order-summary-section order-summary-section-redeem redeem-login-section"
                          data-order-summary-section="discount"
                        >
                          <div className="redeem-login">
                            <div className="redeem-login-title">
                              <h2>Khách hàng thân thiết</h2>
                              <i className="btn-redeem-spinner icon-redeem-button-spinner" />
                            </div>
                            <div className="redeem-login-btn">
                              <a href="#">Đăng nhập</a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="order-summary-section order-summary-section-total-lines payment-lines"
                          style={{ paddingBottom: "8em" }}
                        >
                          <table className="total-line-table">
                            <thead>
                              <tr>
                                <th scope="col">
                                  <span className="visually-hidden">Mô tả</span>
                                </th>
                                <th scope="col">
                                  <span className="visually-hidden">Giá</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="total-line total-line-subtotal">
                                <td className="total-line-name">Tạm tính</td>
                                <td className="total-line-price">
                                  <span className="order-summary-emphasis">
                                    {formatPrice(totalAmount)}
                                  </span>
                                </td>
                              </tr>
                              <tr className="total-line total-line-shipping">
                                <td className="total-line-name">Phí vận chuyển</td>
                                <td className="total-line-price">
                                  <span className="order-summary-emphasis">—</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot className="total-line-table-footer">
                              <tr className="total-line">
                                <td className="total-line-name payment-due-label">
                                  <span className="payment-due-label-total">
                                    Tổng cộng
                                  </span>
                                </td>
                                <td className="total-line-name payment-due">
                                  <span className="payment-due-currency">VND</span>
                                  <span className="payment-due-price">
                                    {formatPrice(totalAmount)}
                                  </span>
                                  <span className="checkout_version"></span>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
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

export default CheckoutPage;
