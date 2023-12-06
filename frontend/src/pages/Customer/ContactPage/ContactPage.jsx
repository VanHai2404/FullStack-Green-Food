import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.css'
import bg_blog from '../../../assets/images/blog/bg_blog.webp';
import NavPost from '../../../components/Post/NavPost';



const ContactPage = () => {


    return (
        <div>
            <div
                className="text-center bg--cover bg--fixed bg--cover-dark js__background "
                style={{
                    backgroundImage: `url(${bg_blog})`, position: 'relative', // Sửa ở đây để sử dụng dấu ` và thêm dấu ngoặc đơn
                }}>
                <div className="overlay"></div> {/* Lớp overlay */}
                <div className="container  bg--cover-content">
                    <h2 className="title--page">
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>Tin tức</font>
                        </font>
                    </h2>
                </div>
            </div>
            <div className="container ">
                <NavPost/>
                <div className="row">
                    {/* Categories */}
                

                </div>

            </div>


        </div>
    )
}

export default ContactPage