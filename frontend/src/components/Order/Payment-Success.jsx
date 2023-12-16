import React from 'react';
import './complete-order.css';
import { BsCheckCircleFill,BsHouseDoorFill  } from "react-icons/bs";

import { Link } from 'react-router-dom';
const PaymentSuccess = () => {
  return (
    <div className="payment_5">
    <div className="alert-container4">
      <div className="alert4" role="alert">
        <h4 className="alert-heading text-center pt-2">
          THANH TOÁN THÀNH CÔNG !
        </h4>
        <p className="text-center" style={{ color: "gray" }}>
          Cám ơn quý khách vì đã mua hàng. Thanh toán của bạn đã được xử lý thành
          công..
        </p>
        <hr />
        <div className="pay_icon">
        <BsCheckCircleFill />
        </div>
        <Link to="/" className="btn btn-outline-success">
        <BsHouseDoorFill style={{ paddingRight: 5 }} />
         Về Trang Chủ
          </Link>
      </div>
    </div>
  </div>  
  );
};

export default PaymentSuccess;
