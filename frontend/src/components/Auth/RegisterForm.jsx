import React from 'react';
import { FaFacebookF,FaUserShield } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
const RegisterForm = () => {
    return (
        <form
            acceptCharset="UTF-8"
            action="#"
            id="#"
            method="post"
            style={{ fontWeight: 400 }}
        >
            <div className="clearfix large_form large_form-mrb">
                <label htmlFor="#" className="icon-field">
                    <FaUserShield/>
                </label>
                <input required=""type="email" defaultValue="" name="#" id="#" placeholder="Nhập số Email" className="text"/>
            </div>
            <div className="clearfix custommer_account_action">
                <div className="action_bottom"
                     >
                        <button className="btnLogin" type="submit" defaultValue="Đăng nhập" >Gửi mã xác nhận</button>
                    
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
export default RegisterForm;