import React, { useState, useCallback } from 'react';
import './UserProfile.css';
import Anh1 from '../../../assets/images/products/SP1.jpeg';
import InvoiceTable from '../../../components/Table/InvoiceTable';

import ProfileForm from './FormProfile';
import UploadAddress from './UploadAddress';
import { Tabs, Form, Input, Button, Row, Col, Radio, Empty } from 'antd';
const { TabPane } = Tabs;
const UserProfile = () => {
  
    const [form] = Form.useForm();
    const [form2] = Form.useForm();


    const [activeTab, setActiveTab] = useState('profile');

    const onFinish2 = (values) => {
        console.log('Change Password Form:', values);
        // Add logic to change password
    };

    const callback = (key) => {
        console.log(key);
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <main>
            <div className="container-fluid" style={{ maxWidth: '1440px' ,paddingTop:'140px'}}>
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="student-profile-sidebar" style={{ paddingLeft: '15px' }}>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'dashboard' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('dashboard')}
                                                data-tab="dashboard"
                                            >
                                                <i className="bi bi-speedometer"></i> &nbsp;Bảng điều khiển
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'profile' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('profile')}
                                                data-tab="profile"
                                            >
                                                <i className="bi bi-person"></i>&nbsp;Thông tin của tôi
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'order-history' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('order-history')}
                                                data-tab="order-history"
                                            >
                                                <i className="bi bi-cart-plus"></i>&nbsp;Lịch sử đặt hàng
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'payment-history' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('payment-history')}
                                                data-tab="payment-history"
                                            >
                                                <i className="bi bi-credit-card-2-back"></i>&nbsp;Lịch sử thanh toán
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'reviews' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('reviews')}
                                                data-tab="reviews"
                                            >
                                                <i className="bi bi-star-fill"></i>&nbsp;Đánh giá
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'address' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('address')}
                                                data-tab="address"
                                            >
                                                <i className="bi bi-star-fill"></i>&nbsp;Địa chỉ
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'comments' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('comments')}
                                                data-tab="comments"
                                            >
                                                <i className="bi bi-chat"></i>&nbsp;Những bình luận của tôi
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'settings' ? 'active show' : ''}`}
                                                href="#"
                                                onClick={() => handleTabClick('settings')}
                                                data-tab="settings"
                                            >
                                                <i className="bi bi-gear"></i>&nbsp;Cài đặt
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="bi bi-box-arrow-right"></i>&nbsp;Đăng xuất
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="student-profile-content">
                            <div className="tab-content" id="myTabContent">
                                <div className={`tab-pane ${activeTab === 'dashboard' ? 'active show' : ''}`} id="dashboard">
                                    <h4>Bảng điều khiển</h4>
                                    <div className="student-profile-content-fact">
                                        {/* ... Add content for dashboard tab */}

                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-4">
                                                <div className="counter-wrapper text-center mb-30">
                                                    <div className="counter-icon">
                                                        <div className="counter-icon-wrap" />
                                                        <div className="count-number">
                                                            <div className="bd-promotion-counter-number align-items-center">
                                                                <span className="counter mb-0">0</span>
                                                                <span />
                                                            </div>
                                                            <p> Đơn mua của tôi </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4">
                                                <div className="counter-wrapper text-center mb-30">
                                                    <div className="counter-icon">
                                                        <div className="counter-icon-wrap" />
                                                        <div className="count-number">
                                                            <span className="counter">
                                                                <div className="bd-promotion-counter-number align-items-center">
                                                                    <span className="counter mb-0">0</span>
                                                                    <span />
                                                                </div>
                                                            </span>
                                                            <p> Giỏ hàng của tôi </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4">
                                                <div className="counter-wrapper text-center mb-30">
                                                    <div className="counter-icon">
                                                        <div className="counter-icon-wrap" />
                                                        <div className="count-number">
                                                            <span className="counter">
                                                                <div className="bd-promotion-counter-number align-items-center">
                                                                    <span className="counter mb-0">2</span>
                                                                    <span />
                                                                </div>
                                                            </span>
                                                            <p> Sản phẩm yêu thích </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="mb-25">My Purches Products</h4>
                                                <div className="bd-trending__item-wrapper">
                                                    <div className="row"></div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'profile' ? 'active show' : ''}`} id="profile">
                                    <h4>Thông tin của tôi</h4>
                                    <ul className="student-profile-info" style={{ marginTop: '30px', padding: '0px' }}>
                                        {/* ... Add content for profile tab */}
                                        <li>
                                            <h5>Ngày đăng kí :</h5><span>12/03/23 01:55 pm</span>
                                        </li>
                                        <li>
                                            <h5>Họ và tên :</h5><span className="text-capitalize">Trần Hoàng Vũ</span>
                                        </li>
                                        <li>
                                            <h5>Email :</h5><span> vuthpd06907@fpt.edu.vn </span>
                                        </li>
                                        <li>
                                            <h5>Điện thoại :</h5><span> 0375608917 </span>
                                        </li>
                                        <li>
                                            <h5>Giới tính :</h5><span>Nam giới</span>
                                        </li>
                                        <li>
                                            <h5>Tiểu sử :</h5><span>
                                                Trần Hoàng Vũ đang kết thúc năm đầu tiên tại Đại học DePaul, nơi cô quan
                                                tâm đến kinh doanh. Mặc dù vẫn chưa chọn chuyên ngành nhưng cô ấy đang cân
                                                nhắc về tài chính hoặc tiếp thị. Sau khi chứng kiến ​​cha mẹ điều hành một
                                                nhà hàng trong nhiều năm, khi còn rất trẻ, cô đã biết rằng mình cũng muốn
                                                kinh doanh.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`tab-pane ${activeTab === 'order-history' ? 'active show' : ''}`} id="order-history">
                                    <h4>Lịch sử đặt hàng</h4>
                                    <InvoiceTable  />
                                </div>
                                <div className={`tab-pane ${activeTab === 'payment-history' ? 'active show' : ''}`} id="payment-history">
                                    <h4>Lịch sử thanh toán</h4>
                                    {/* ... Add content for payment history tab */}
                                </div>
                                <div className={`tab-pane ${activeTab === 'reviews' ? 'active show' : ''}`} id="reviews">
                                    <h4>Đánh giá</h4>
                                    <Empty />
                                    {/* ... Add content for reviews tab */}
                                </div>
                                <div className={`tab-pane ${activeTab === 'address' ? 'active show' : ''}`} id="address">
                                    <h4>Địa chỉ</h4>
                                    {/* <Empty /> */}
                                    <UploadAddress/>
                                   
                                </div>
                                <div className={`tab-pane ${activeTab === 'comments' ? 'active show' : ''}`} id="comments">
                                    <h4>Những bình luận của tôi</h4>
                                    {/* ... Add content for comments tab */}
                                    <div className="student-profile-reviews ">
                                        <div className="student-profile-reviews-item mt-30">
                                            <div className="student-profile-reviews-course-title">
                                                <h5> <a href="#">Năm mẫu tải dữ liệu tăng hiệu suất web</a> </h5>
                                            </div>
                                            <div className="student-profile-reviews-text">
                                                <div className="student-profile-reviews-text-wrap mb-20">
                                                    <div className="student-profile-review-icon">
                                                        <p>12/03/23 01:58 pm</p>
                                                    </div>
                                                    <div className="student-profile-review-update d-flex"><button type="button"
                                                        className="student-profile-review-update-btn"><i
                                                            className="bi bi-trash"></i>&nbsp;Delete</button></div>
                                                </div>
                                                <div className="student-profile-review-content">
                                                    <p>gchfc bvh bvh bbh </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="student-profile-reviews-item mt-30">
                                            <div className="student-profile-reviews-course-title">
                                                <h5> <a href="#">Năm mẫu tải dữ liệu tăng hiệu suất web</a> </h5>
                                            </div>
                                            <div className="student-profile-reviews-text">
                                                <div className="student-profile-reviews-text-wrap mb-20">
                                                    <div className="student-profile-review-icon">
                                                        <p>12/03/23 01:58 pm</p>
                                                    </div>
                                                    <div className="student-profile-review-update d-flex"><button type="button"
                                                        className="student-profile-review-update-btn"><i
                                                            className="bi bi-trash"></i>&nbsp;Delete</button></div>
                                                </div>
                                                <div className="student-profile-review-content">
                                                    <p>gchfc bvh bvh bbh </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'settings' ? 'active show' : ''}`} id="settings">
                                    <h4 style={{ marginBottom: '20px' }}>Cài đặt</h4>
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab="Quản lý thông tin" key="1">
                                            <div className="mb-40">
                                                <div
                                                    className="student-profile-setting-cover-img"

                                                ></div>
                                        

                                                <ProfileForm />
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Đổi mật khẩu" key="2">
                                            <h4 style={{ marginTop: 20, marginBottom: 20 }}>Đổi mật khẩu</h4>
                                            <div className="bd-postbox__contact">
                                                <Form form={form2} onFinish={onFinish2}>
                                                    <Row gutter={[16, 16]}>
                                                        <Col md={12}>
                                                            <Form.Item

                                                                name="password"
                                                                className="contact-from-input mb-20"
                                                                labelCol={{ span: 24 }}
                                                                wrapperCol={{ span: 24 }}
                                                                rules={[{ required: true, message: 'Please enter your current password' }]}
                                                            >
                                                                <Input.Password placeholder="Current Password" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Item

                                                                name="newPassword"
                                                                className="contact-from-input mb-20"
                                                                labelCol={{ span: 24 }}
                                                                wrapperCol={{ span: 24 }}
                                                                rules={[{ required: true, message: 'Please enter your new password' }]}
                                                            >
                                                                <Input.Password placeholder="newPassword" />
                                                            </Form.Item>
                                                        </Col>



                                                        <Col sm={12}>
                                                            <Form.Item className="cont-btn mb-20  mt-10 ">
                                                                <Button type="primary" htmlType="submit" className="bd-bn__btn-1">
                                                                    Change Password
                                                                </Button>
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <span />
                                            </div>
                                        </TabPane>
                                   
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default UserProfile;
