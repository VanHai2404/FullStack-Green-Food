// SidebarMenu.js

import React from 'react';
import './SidebarMenu.css'; // Import file CSS cho styling
import { FaBars, FaBloggerB } from 'react-icons/fa';
import { BiSolidCategory, BiConfused } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { TbFileInvoice } from 'react-icons/tb';
import { GiFruitBowl } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import Logo from '../../../../assets/images/Logo/LogoAdmin.png';
import Logo_sm from '../../../../assets/images/Logo/logo-sm.png';
import NavItem from '../../../../components/NavItem/NavItem';

const SidebarMenu = () => {

  const category = [
    { to: config.routes.ListCategory, title: 'Danh Sách Danh Mục' },
    { to: config.routes.AddCatrgory, title: 'Tạo Danh Mục' },
  ];

  const supplier = [
    { to: config.routes.ListSupplier, title: 'Danh Sách Nhà SX' },
    { to: config.routes.AddSupplier, title: 'Tạo Nhà Cung Cấp' },
  ];
  const products = [
    { to: config.routes.ListProduct, title: 'Danh Sách Sản Phẩm' },
    { to: config.routes.AddProduct, title: 'Tạo Sản Phẩm' },
    { to: '3456', title: 'Thông Tin Chi Tiết SP' },

  ];
  const Invoice = [
    { href: '#', title: 'Danh Sách Hóa Đơn' },
    { href: '#', title: 'Tạo Hóa Đơn' },
    { href: '#', title: 'Thông Tin Chi Tiết' },

  ];
  const Blog = [
    { href: '#', title: 'Danh Sách Bài Viết' },
    { href: '#', title: 'Tags' },
    { href: '#', title: 'Danh Mục Bài Viết' },
    { href: '#', title: 'Tạo Bài Viết' },

  ];
  const Customer = [
    { to: config.routes.ListCustomer, title: 'Danh Sách Khách Hàng' },
    { href: '#', title: 'Tags' },
    { to: config.routes.AddCustomer, title: 'Tạo Khách Hàng' },

  ];


  return (

    <div className="vertical-menu" is-condensed="false">
      <div className="navbar-brand-box">
        <a
          aria-current="page"
          href="#"
          className="router-link-active router-link-exact-active logo logo-dark"
        >
          <span className="logo-sm">
            <img src={Logo_sm} alt="" height={22} />
          </span>
          <span className="logo-lg">
            <img src={Logo} alt="" height={20} />
          </span>
        </a>
        <a aria-current="page" href="#" className="router-link-active router-link-exact-active logo logo-light" >
          <span className="logo-sm">
            <img
              src={Logo_sm}
              alt=""
              height={22}
            />
          </span>
          <span className="logo-lg">
            <img
              src={Logo}
              alt=""
              height={20}
            />
          </span>
        </a>
      </div>
      <button
        variant="button"
        className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
        fdprocessedid="llb71s"
      >
        <FaBars />
      </button>
      <div className="sidebar-menu-scroll simplebar-scrollable-y" data-simplebar="init"  >
        <div className="simplebar-wrapper" style={{ margin: 0 }}>
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
              <div
                className="simplebar-content-wrapper"
                tabIndex={0}
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: 0 }}>
                  <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                      <li className="menu-title">Home</li>
                      {/**/}
                      {/**/}
                      <li className="mm-active">
                        {/**/}
                        <a href="#"
                          className="router-link-active router-link-exact-active side-nav-link-ref active"
                        >
                          <i className="uil-home-alt" />
                          <span>Trang tổng quan</span>
                          <span className="badge rounded-pill bg-primary float-end">
                            01
                          </span>
                        </a>
                        {/**/}
                      </li>
                      <li className="menu-title">Menu</li>
                      {/**/}
                      {/**/}
                      <li>
                        <Link to={config.routes.ListProduct} className="side-nav-link-ref">
                          <i className="uil-calender" />
                          <span>Lịch sự kiện</span>
                        </Link>
                      </li>


                      {/**/}
                      <li>
                        {/**/}
                        <a
                          href="/minible/vue/v-light/chat"
                          className="side-nav-link-ref"
                        >
                          <i className="uil-comments-alt" />
                          <span>Trò chuyện</span>
                          <span className="badge rounded-pill bg-warning float-end">
                            New
                          </span>
                        </a>
                        {/**/}
                      </li>
                      {/*Thươngf mai điện tử start*/}
                      <li>
                        <a
                          href="#"
                          className="is-parent has-arrow"
                          aria-expanded="false"
                        >
                          <i className="uil-store" />
                          {/**/}
                          <span>Thương mại điện tử</span>
                        </a>
                        {/**/}
                        <ul className="sub-menu mm-collapse" aria-expanded="false">
                          <li>
                            <a
                              href="/minible/vue/v-light/ecommerce/checkout"
                              className="side-nav-link-ref"
                            >
                              Thông tin Giao hàng
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ecommerce/shops"
                              className="side-nav-link-ref"
                            >
                              Danh sách lô hàng
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ecommerce/add-product"
                              className="side-nav-link-ref"
                            >
                              Tạo lô hàng
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ecommerce/add-product"
                              className="side-nav-link-ref"
                            >
                              Theo dõi
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                        </ul>
                      </li>

                      {/*Thương mai điện tử end */}
                      <NavItem title="Quản lý Sản Phẩm" icon={GiFruitBowl} links={products} />
                      {/**/}

                      <NavItem title="Quản Lý Danh Mục" icon={BiSolidCategory} links={category} />
                      {/*  */}
                      <NavItem title="Quản Lý Nhà SX" icon={BiSolidCategory} links={supplier} />
                      <NavItem title=" Quản Lý Hóa Đơn " icon={TbFileInvoice} links={Invoice} />
                      {/*  */}
                      <NavItem title=" Blog " icon={FaBloggerB} links={Blog} />
                      {/**/}
                      <NavItem title=" Quản Lý Khách H" icon={RiCustomerService2Fill} links={Customer} />
                      {/*  */}
                      {/* <NavItem title="Đánh giá" icon={BiConfused}  links={Customer} />              */}
                      {/*  */}
                      <li>
                        <a
                          href="#"
                          className="is-parent has-arrow"
                          aria-expanded="false"
                        >
                          <BiConfused className='iconReact' />
                          {/**/}
                          <span>Đánh giá</span>
                        </a>
                        {/**/}
                        <ul className="sub-menu mm-collapse" aria-expanded="false">
                          <li>
                            <a
                              href="/minible/vue/v-light/invoices/list"
                              className="side-nav-link-ref"
                            >
                              Danh sách hóa đơn
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/invoices/detail"
                              className="side-nav-link-ref"
                            >
                              Chi tiết hóa đơn
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                        </ul>
                      </li>

                      {/**/}
                      <li>
                        <a
                          href="#"
                          className="is-parent has-arrow"
                          aria-expanded="false"
                        >
                          <i className="uil-book-alt" />
                          {/**/}
                          <span>Liên lạc</span>
                        </a>
                        {/**/}
                        <ul className="sub-menu mm-collapse" aria-expanded="false">
                          <li>
                            <a
                              href="/minible/vue/v-light/contacts/grid"
                              className="side-nav-link-ref"
                            >
                              User Grid
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/contacts/list"
                              className="side-nav-link-ref"
                            >
                              User List
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/contacts/profile"
                              className="side-nav-link-ref"
                            >
                              Profile
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                        </ul>
                      </li>
                      <li className="menu-title">Pages</li>
                      {/**/}
                      {/**/}
                      <li>
                        <a
                          href="#"
                          className="is-parent has-arrow"
                          aria-expanded="false"
                        >
                          <i className="uil-user-circle" />
                          {/**/}
                          <span>Authentication</span>
                        </a>
                        {/**/}
                        <ul className="sub-menu mm-collapse" aria-expanded="false">
                          <li>
                            <a
                              href="/minible/vue/v-light/auth/login-1"
                              className="side-nav-link-ref"
                            >
                              Login
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/auth/register-1"
                              className="side-nav-link-ref"
                            >
                              Register
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/auth/recoverpwd"
                              className="side-nav-link-ref"
                            >
                              Recover Password
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/auth/lock-screen"
                              className="side-nav-link-ref"
                            >
                              Lock screen
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                        </ul>
                      </li>
                      {/**/}
                      <li className="menu-title">Cài Đặt</li>
                      {/**/}
                      {/**/}
                      <li>
                        <a
                          href="#"
                          className="is-parent has-arrow"
                          aria-expanded="false"
                        >
                          <i className="uil-flask" />
                          {/**/}
                          <span>Cài Đặt 1</span>
                        </a>
                        {/**/}
                        <ul className="sub-menu mm-collapse" aria-expanded="false">
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/alerts"
                              className="side-nav-link-ref"
                            >
                              Alerts
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/buttons"
                              className="side-nav-link-ref"
                            >
                              Buttons
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/cards"
                              className="side-nav-link-ref"
                            >
                              Cards
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/carousel"
                              className="side-nav-link-ref"
                            >
                              Carousel
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/dropdown"
                              className="side-nav-link-ref"
                            >
                              Dropdowns
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/grid"
                              className="side-nav-link-ref"
                            >
                              Grid
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/images"
                              className="side-nav-link-ref"
                            >
                              Images
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/lightbox"
                              className="side-nav-link-ref"
                            >
                              Lightbox
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/modals"
                              className="side-nav-link-ref"
                            >
                              Modals
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/rangeslider"
                              className="side-nav-link-ref"
                            >
                              Range Slider
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/progressbar"
                              className="side-nav-link-ref"
                            >
                              Progress Bars
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/placeholder"
                              className="side-nav-link-ref"
                            >
                              Placeholder
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/sweet-alert"
                              className="side-nav-link-ref"
                            >
                              Sweet Alert
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/tabs-accordions"
                              className="side-nav-link-ref"
                            >
                              Tabs &amp; Accordions
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/typography"
                              className="side-nav-link-ref"
                            >
                              Typography
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/video"
                              className="side-nav-link-ref"
                            >
                              Video
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/general"
                              className="side-nav-link-ref"
                            >
                              General
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/colors"
                              className="side-nav-link-ref"
                            >
                              Colors
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/ui/rating"
                              className="side-nav-link-ref"
                            >
                              Rating
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                        </ul>
                      </li>
                      {/**/}
                      <li>
                        <a
                          href="#"
                          className="is-parent has-dropdown"
                          aria-expanded="false"
                        >
                          <i className="uil-shutter-alt" />
                          <span className="badge rounded-pill bg-danger float-end">
                            8
                          </span>
                          <span>Cài Đặt 2</span>
                        </a>
                        {/**/}
                        <ul className="sub-menu mm-collapse" aria-expanded="false">
                          <li>
                            <a
                              href="/minible/vue/v-light/form/elements"
                              className="side-nav-link-ref"
                            >
                              Elements
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/validation"
                              className="side-nav-link-ref"
                            >
                              Validation
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/advanced"
                              className="side-nav-link-ref"
                            >
                              Advanced
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/editor"
                              className="side-nav-link-ref"
                            >
                              Editor
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/upload"
                              className="side-nav-link-ref"
                            >
                              File Upload
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/repeater"
                              className="side-nav-link-ref"
                            >
                              Repeater
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/wizard"
                              className="side-nav-link-ref"
                            >
                              Wizard
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                          <li>
                            <a
                              href="/minible/vue/v-light/form/mask"
                              className="side-nav-link-ref"
                            >
                              Mask
                            </a>
                            {/**/}
                            {/**/}
                          </li>
                        </ul>
                      </li>
                      {/**/}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: 250, height: 912 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ width: 0, display: "none" }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 490,
              transform: "translate3d(0px, 0px, 0px)",
              display: "block"
            }}
          />
        </div>
      </div>
    </div>

  );
}

export default SidebarMenu;
