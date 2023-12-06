// src/components/DeliveryInformation.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePhoneNumber } from '../../../constants/validationUtils';
import { updateInformationData, updateAddressData } from '../../../redux/actions/order-action';
import AddressForm from './AddressForm';
import { useDispatch } from 'react-redux';
const DeliveryInformation = ({ onPayment ,updateShippingFee }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const [selectedAddress, setSelectedAddress] = useState({
    codeCity: null,
    city: null,
    district: null,
    ward: null,
    streetNumber: null,
  });

  const [deliveryOption, setDeliveryOption] = useState('giaoTaiNha'); // 'giaoTaiNha' là giả sử mặc định là giao tận nơi
  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

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

  const validateInputs = () => {
    let isValid = true;

    // Kiểm tra Họ và Tên
    if (!userData.fullname.trim()) {
      // Nếu Họ và Tên không được nhập
      setFullNameError('Vui lòng nhập Họ và Tên.');
      isValid = false;
    } else {
      setFullNameError('');
    }

    if (!validateEmail(userData.email)) {
      setEmailError('Email không hợp lệ.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePhoneNumber(userData.phone)) {
      setPhoneError('Số điện thoại không hợp lệ.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // if (deliveryOption === 'giaoTaiNha' && !address.trim()) {
    //   setAddressError('Vui lòng nhập địa chỉ.');
    //   isValid = false;
    // } else {
    //   setAddressError('');
    // }

    return isValid;
  };



  const handleContinueToPayment = () => {
    console.log("User selectedAddress:", selectedAddress);
  


    updateShippingFee(selectedAddress.codeCity);

    if (!validateInputs() ) {
      // Nếu dữ liệu không hợp lệ
      return;
    }
// Gọi hàm cập nhật phí vận chuyển và tiếp tục

    dispatch(updateInformationData({ userData }));
    dispatch(updateAddressData({ selectedAddress }));
    onPayment();
  };
  



  return (

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
                    className={`field-input form-control ${fullNameError && 'is-invalid'}`}
                    size={30}
                    type="text"
                    value={userData.fullname}
                    onChange={(e) => setUserData({ ...userData, fullname: e.target.value })}
                  />
                  {fullNameError && <span className="invalid-feedback">{fullNameError}</span>}
                </div>
              </div>
              <div className="field field-two-thirds">
                <div className="field-input-wrapper">
                  <label className="field-label" htmlFor="checkout_user_email">
                    Email
                  </label>
                  <input
                    placeholder="email"
                    className={`field-input form-control ${emailError && 'is-invalid'}`}
                    size={30}
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}

                  />
                  {emailError && <span className="invalid-feedback">{emailError}</span>}
                </div>
              </div>
              <div className="field field-required field-third">
                <div className="field-input-wrapper">
                  <label className="field-label">
                    Số điện thoại
                  </label>
                  <input
                    placeholder="số điện thoại"

                    className={`field-input form-control ${phoneError && 'is-invalid'}`}
                    size={30}
                    type="text"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  />
                  {phoneError && <span className="invalid-feedback">{phoneError}</span>}
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
                    <AddressForm onAddressSelect={setSelectedAddress} />
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

        <button
          type="submit"
          className="step-footer-continue-btn btn"
          onClick={handleContinueToPayment}
        >
          <span className="btn-content">
            Tiếp tục đến phương thức thanh toán
          </span>
        </button>

        <a className="step-footer-previous-link" href="#">
          Giỏ hàng
        </a>
      </div>
    </div>

  );
};

export default DeliveryInformation;
