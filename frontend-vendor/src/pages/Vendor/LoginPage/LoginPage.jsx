import React from 'react';
import Logo from '../../../assets/images/Logo/LOGO2.png';
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import './Login.css'

const Login = () => {


  return (
    <main>
      <div className="vh-100">
        <div className="login-form-bx">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-7 box-skew d-flex">
                <div className="authincation-content">
                  <div className="mb-4">
                    <h3 className="mb-1 font-w600">Chào mừng bạn đến Fruit FPT</h3>
                    <p className="">Đăng nhập bằng cách nhập thông tin bên dưới</p>
                  </div>
                  <form>
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">Email</strong>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="demo@email.com"
                        fdprocessedid="dshr78"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">Password</strong>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        defaultValue={123456}
                        fdprocessedid="esxpcl"
                      />
                    </div>
                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox ml-1 ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="basic_checkbox_1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="basic_checkbox_1"
                          >
                            Ghi nhớ tôi
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btnLogin btn-primary btn-block"
                        fdprocessedid="zh9ik4"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="new-account mt-2">
                    <p className="mb-0">
                    Bạn chưa có tài khoản?{" "}
                      <a className="text-black" href="/admin/demo/page-register">
                         Đăng ký
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 d-flex box-skew1">
                <div className="inner-content align-self-center">
                  <a className="login-logo" href="admin/dashboard">
                 
                    <img
                      src={Logo}
                      alt=""
                      className="logo-text ml-1 logo2"
                    />
                  </a>
                  <h2 className="m-b10 text-white">Đăng nhập vào bạn ngay bây giờ</h2>
                  <p className="m-b40 text-white">
                    Bạn có thể &amp; Đăng nhập bằng mạng xã hội
                  </p>
                  <ul className="social-icons mt-4">
                    <li>
                      <a href="admin/login">
                        <FaFacebookF/>
                      </a>
                    </li>
                    <li>
                      <a href="admin/login">
                       <FaTwitter/>
                      </a>
                    </li>
                    <li>
                      <a href="admin/login">
                        <FaLinkedinIn/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </main>


  );
};

export default Login;
