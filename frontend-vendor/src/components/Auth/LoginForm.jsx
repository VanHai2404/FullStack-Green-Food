import React, { useState } from 'react';
import { login } from '../../redux/actions/auth-action';
import { useDispatch } from 'react-redux';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

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
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mb-2 ">
            <strong className="">Email</strong>
          </label>
          <input
            type="email"
            className={`form-control ${emailError && 'is-invalid'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         
           
          />
           {emailError && <span className="invalid-feedback">{emailError}</span>}
        </div>
        <div className="form-group">
          <label className="mb-2 ">
            <strong className="">Password</strong>
          </label>
          <input
            type="password"
            className={`form-control ${passwordError && 'is-invalid'}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          
          />
          {passwordError && <span className="invalid-feedback">{passwordError}</span>}
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
          >
            Sign In
          </button>
        </div>
      </form>


    );
};


export default LoginForm;