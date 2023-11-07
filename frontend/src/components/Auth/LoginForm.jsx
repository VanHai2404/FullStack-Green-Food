import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';

const LoginForm = () => {
    return (
        <form
            acceptCharset="UTF-8"
            action="#"
            id="#"
            method="post"
            style={{ fontWeight: 400 }}
        >
            <div className="clearfix large_form">
                <label htmlFor="#" className="icon-field">
                    <i className="icon-login icon-envelope " />
                </label>
                <input required="" type="text" defaultValue="" name="#" id="#" placeholder="Vui số điện thoại của bạn "className="text" />
            </div>
            <div className="clearfix large_form large_form-mrb">
                <label htmlFor="#" className="icon-field">
                    <i className="icon-login icon-shield" />
                </label>
                <input required=""type="password" defaultValue="" name="#" id="#" placeholder="Vui lòng nhập mật khẩu" className="text"/>
            </div>
            <div className="clearfix large_form sitebox-recaptcha ">
                This site is protected by reCAPTCHA and the Google
                <a  target="_blank" rel="noreferrer">
                    Privacy Policy
                </a>
                and{" "}
                <a  target="_blank" rel="noreferrer">
                    Terms of Service
                </a>{" "}
                apply.
            </div>
            <div className="clearfix custommer_account_action">
                <div
                    className="action_bottom"
                     >
                        <button className="btnLogin" type="submit" defaultValue="Đăng nhập" >Đăng nhập</button>
                    
                </div>
                <div className="req_pass">
                    <p style={{ marginBottom: 0 }}>
                        Bạn chưa có tài khoản?
                        <a   title="Quên mật khẩu">
                            Quên mật khẩu?
                        </a>
                    </p>
                    <p style={{ marginBottom: 0 }}>
                        Bạn quên mật khẩu?
                    <a  title="Đăng ký">{" "} Đăng ký</a>
                    </p>
                </div>
            </div>
            <div className="btn-social" style={{ marginTop: 20 }}>
                <button type="button" className="btsocialloginfb" id="btn-facebook-login">
                  <FaFacebookF/> Facebook
                </button>
                <button type="button" className="btsociallogingg" id="btn-google-login">
                    <AiOutlineGooglePlus/> Google
                </button>
            </div>
        </form>


    );
};
export default LoginForm;