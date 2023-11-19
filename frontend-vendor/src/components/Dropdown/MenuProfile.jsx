import React, { useState, useRef,useEffect  } from 'react';
import { CSSTransition } from 'react-transition-group';
import LogoUser from '../../assets/images/Logo/LogoUser.png'
import './Dropdown.css';

const MenuProfile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef]); 

  const handleMenuClick = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="btn-group d-inline-block">
    <button
        className="btn btn-md btn-white header-item"
        type="button" 
        onClick={handleDropdownToggle}> 
        <img className="rounded-circle header-profile-user" src={LogoUser} alt="Header Avatar"/>
        <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
            VanHai
        </span>
        <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
    </button>
    <CSSTransition
        in={isDropdownOpen}
        timeout={300}
        classNames="fade"
        unmountOnExit
        nodeRef={menuRef} // Thêm ref vào CSSTransition
    >
         <ul className="dropdown-menu show dropdown-menu-end" role="menu"
        style={{
            top: 70,
            left: "0px",
            width: "max-content",
            display: isDropdownOpen ? 'block' : 'none',
        }}
        ref={menuRef} // Thêm ref vào phần tử ul
    >
        <a className="dropdown-item" href="#">
            <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1" />
            <span className="align-middle">Hồ sơ</span>
        </a>
        <a className="dropdown-item" href="#">
            <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted" />
            <span className="align-middle">Ví của tôi</span>
        </a>
        <a className="dropdown-item d-block" href="#">
            <i className="uil uil-cog font-size-18 align-middle me-1 text-muted" />
            <span className="align-middle">Cài đặt</span>
            <span className="badge bg-soft-success rounded-pill mt-1 ms-2">
                03
            </span>
        </a>
        <a className="dropdown-item" href="#">
            <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted" />
            <span className="align-middle">Màn hình khóa</span>
        </a>
        <a className="dropdown-item" href="/logout">
            <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />
            <span className="align-middle">Đăng xuất</span>
        </a>
    </ul>
        

      </CSSTransition>
    
   
</div>
    
  );
};

export default MenuProfile;
