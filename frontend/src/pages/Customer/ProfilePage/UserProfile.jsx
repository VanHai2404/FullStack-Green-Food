import React, { useState } from 'react';
import './UserProfile.css';
import { Form, Input, Button, Radio, Row, Col } from 'antd';
const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const onFinish = (values) => {
        // Handle form submission
        console.log('Received values:', values);
    };
    const onFinish2 = (values) => {
        // Handle form submission
        console.log('Received values:', values);
    };


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <main>
            <div className="container-fluid" style={{ maxWidth: '1440px' }}>
                <div className="student-profile-author">
                    <div className="student-profile-author-img">
                        <img alt="" src="images/user-icon.png" />
                    </div>
                    <div className="student-profile-author-text">
                        <span>Xin chào,</span>
                        <h3> Trần Hoàng Vũ </h3>
                    </div>
                </div>
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
                                        <>
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
                                        </>

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
                                            <h5>Họ và tên :</h5><span class="text-capitalize">Trần Hoàng Vũ</span>
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
                                    {/* ... Add content for order history tab */}
                                </div>
                                <div className={`tab-pane ${activeTab === 'payment-history' ? 'active show' : ''}`} id="payment-history">
                                    <h4>Lịch sử thanh toán</h4>
                                    {/* ... Add content for payment history tab */}
                                </div>
                                <div className={`tab-pane ${activeTab === 'reviews' ? 'active show' : ''}`} id="reviews">
                                    <h4>Đánh giá</h4>
                                    {/* ... Add content for reviews tab */}
                                </div>
                                <div className={`tab-pane ${activeTab === 'comments' ? 'active show' : ''}`} id="comments">
                                    <h4>Những bình luận của tôi</h4>
                                    {/* ... Add content for comments tab */}
                                    <div class="student-profile-reviews ">
                                        <div class="student-profile-reviews-item mt-30">
                                            <div class="student-profile-reviews-course-title">
                                                <h5> <a href="#">Năm mẫu tải dữ liệu tăng hiệu suất web</a> </h5>
                                            </div>
                                            <div class="student-profile-reviews-text">
                                                <div class="student-profile-reviews-text-wrap mb-20">
                                                    <div class="student-profile-review-icon">
                                                        <p>12/03/23 01:58 pm</p>
                                                    </div>
                                                    <div class="student-profile-review-update d-flex"><button type="button"
                                                        class="student-profile-review-update-btn"><i
                                                            class="bi bi-trash"></i>&nbsp;Delete</button></div>
                                                </div>
                                                <div class="student-profile-review-content">
                                                    <p>gchfc bvh bvh bbh </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="student-profile-reviews-item mt-30">
                                            <div class="student-profile-reviews-course-title">
                                                <h5> <a href="#">Năm mẫu tải dữ liệu tăng hiệu suất web</a> </h5>
                                            </div>
                                            <div class="student-profile-reviews-text">
                                                <div class="student-profile-reviews-text-wrap mb-20">
                                                    <div class="student-profile-review-icon">
                                                        <p>12/03/23 01:58 pm</p>
                                                    </div>
                                                    <div class="student-profile-review-update d-flex"><button type="button"
                                                        class="student-profile-review-update-btn"><i
                                                            class="bi bi-trash"></i>&nbsp;Delete</button></div>
                                                </div>
                                                <div class="student-profile-review-content">
                                                    <p>gchfc bvh bvh bbh </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'settings' ? 'active show' : ''}`} id="settings">
                                    <h4 style={{ marginBottom: '20px' }}>Cài đặt</h4>
                                    <>
                                        <div className="student-profile-settings">
                                            <div className="mb-40">
                                                <div
                                                    className="student-profile-setting-cover-img"
                                                    style={{ backgroundImage: "url(images/course-slider.6525fdc5.png)" }}
                                                ></div>
                                                <div className="student-profile-setting-author-img upload-profile-pic">
                                                    <img
                                                        alt=""
                                                        width={200}
                                                        height={200}
                                                        src="images/user-icon.png"
                                                        style={{ color: "transparent", width: "auto", height: "auto" }}
                                                    />
                                                    <input id="" className="hidden" accept="" required="" type="file" />
                                                </div>
                                            </div>
                                            <Form onFinish={onFinish}>
                                                <Row gutter={[16, 16]}>
                                                    <Col md={6}>
                                                        <Form.Item
                                                            name="firstName"
                                                            label="Họ"
                                                            rules={[{ required: true, message: 'Please enter your first name' }]}
                                                        >
                                                            <Input placeholder="First Name" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Item
                                                            name="lastName"
                                                            label="Tên"
                                                            rules={[{ required: true, message: 'Please enter your last name' }]}
                                                        >
                                                            <Input placeholder="Last Name" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Item
                                                            name="email"
                                                            label="Email"
                                                            rules={[
                                                                { required: true, message: 'Please enter your email' },
                                                                { type: 'email', message: 'Invalid email address' },
                                                            ]}
                                                        >
                                                            <Input placeholder="Email" readOnly />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Item
                                                            name="phone"
                                                            label="Số điện thoại"
                                                            rules={[{ required: true, message: 'Please enter your phone number' }]}
                                                        >
                                                            <Input placeholder="Phone" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Item name="gender" label="Giới tính">
                                                            <Radio.Group>
                                                                <Radio value="0">Nữ</Radio>
                                                                <Radio value="1">Nam</Radio>
                                                            </Radio.Group>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Form.Item>
                                                            <Button type="primary" htmlType="submit">
                                                                Update Profile
                                                            </Button>
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                        <h4 style={{ marginTop: 20, marginBottom: 20 }}>Đổi mật khẩu</h4>
                                        <div className="bd-postbox__contact">
                                            <Form onFinish={onFinish2}>
                                                <Row gutter={[16, 16]}>
                                                    <Col md={6}>
                                                        <Form.Item
                                                            name="password"
                                                            label="Current Password"
                                                            rules={[{ required: true, message: 'Please enter your current password' }]}
                                                        >
                                                            <Input.Password placeholder="Current Password" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Item
                                                            name="newPassword"
                                                            label="New Password"
                                                            rules={[{ required: true, message: 'Please enter your new password' }]}
                                                        >
                                                            <Input.Password placeholder="New Password" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Form.Item>
                                                            <Button type="primary" htmlType="submit">
                                                                Change Password
                                                            </Button>
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            <span />
                                        </div>
                                    </>


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
