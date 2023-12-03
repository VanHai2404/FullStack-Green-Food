import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth-action';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


    
  const validateInputs = () => {
    let isValid = true;

    // Kiểm tra email
    if (!email.trim()) {
      setEmailError('Vui lòng nhập email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Kiểm tra password
    if (!password.trim()) {
      setPasswordError('Vui lòng nhập mật khẩu.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };


   // Tạo đối tượng chứa thông tin đăng nhập
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
        return;
      }
    // Tạo đối tượng chứa thông tin đăng nhập
    const user = {
      email,
      password,

    };
    // Gọi action đăng nhập từ Redux
   
    dispatch(login(user, navigate));

  };


    return (
        <form
            acceptCharset="UTF-8"
            action="#"
            id="#"
            method="post"
            style={{ fontWeight: 400 }}
        >
            <div className="clearfix large_form">
                <label className="icon-field">
                    <i className="icon-login icon-envelope " />
                </label>
                <input required="" type="text" defaultValue=""
                 name="email" id="#" placeholder="Vui lòng nhập email"
                 className={`text ${emailError && 'is-invalid'}`}
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} 
                />
                {emailError && <span className="invalid-feedback">{emailError}</span>}
            </div>
            <div className="clearfix large_form large_form-mrb">
                <label className="icon-field">
                    <i className="icon-login icon-shield" />
                </label>
                <input required=""type="password" defaultValue="" name="#"
                 id="#" placeholder="Vui lòng nhập mật khẩu" 
                 className={`text ${passwordError && 'is-invalid'}`}
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
             {passwordError && <span className="invalid-feedback">{passwordError}</span>}
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
                    className="action_bottom">
                        <button className="btnLogin" type="submit" defaultValue="Đăng nhập" onClick={handleSubmit} >Đăng nhập</button>
                    
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