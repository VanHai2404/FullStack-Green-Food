import React, { useEffect, useState } from 'react';
import './ProductDetai.css';
import { FaRegHeart, FaShoppingBasket, FaFacebookF, FaWhatsapp, FaRegStar } from 'react-icons/fa';
import { FaCircle } from "react-icons/fa6";
import { fetchProductDetail } from '../../../redux/actions/product-aciton';
import { useParams } from "react-router-dom";
import config from '../../../config';
import { formatPrice } from '../../../redux/actions/cart-action';

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Chuyển khai báo state vào đầu component

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const result = await fetchProductDetail(productId);
        setProductDetail(result);
        if (result && result.images.length > 0) {
          setSelectedImage(result.images[0]);
        }
      } catch (error) {
        // Xử lý lỗi
      }
    };

    getProductDetail();
  }, [productId]);

  console.log("SAN PHẨM : ", productDetail);

  if (!productDetail) {
    return <p>Loading...</p>;
  }

  const { images } = productDetail;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <main style={{ backgroundColor: "rgb(255, 255, 255)", minHeight: "100vh" }}>
      <div className="pdp-t3">
        <div className="container-fluid ">
          <div className="row top-container-padding">
            <div className="imgContainer col-lg-7">
              <app-product-model style={{ width: "100%" }}>
                <div
                  className="d-flex imageModel"
                  style={{ flexDirection: "column" }}
                >
                  {/* Hiển thị ảnh đầu tiên trong mảng */}
                  <div className="imgCont">
                    <div className="ngxImageZoomContainer" style={{ width: 535, height: 535 }}>
                      <img
                        className="ngxImageZoomThumbnail"
                        src={`http://localhost:8080/api/home/image/${selectedImage}`}
                        alt={`Product Image`}
                      />
                    </div>
                  </div>

                  {/* Hiển thị danh sách các ảnh */}
                  <div className="d-flex flex-wrap thumbanial-cntnr">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`thumbImg me-1 ${image === selectedImage ? 'active' : ''}`}
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          style={{ objectPosition: 'contain' }}
                          src={`http://localhost:8080/api/home/image/${image}`}
                          alt={`Product Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </app-product-model>
            </div>
            <div className="mainContent col-lg-5 mt-4 mt-lg-0">
              <div className="country">
                <h4> {productDetail.product.supplier.nation} </h4>
              </div>
              <div className="d-flex">
                <div className="pdp-heart">
                  <h1>{productDetail.product.name}</h1>
                </div>
                <div className="ms-auto">
                  <div className="brandImg shadow-sm">
                    <img
                      alt="Chiquita"
                      src="https://resources.commerceup.io?key=https%3A%2F%2Fprod-admin-images.s3.ap-south-1.amazonaws.com%2FpWVdUiFHtKGqyJxESltt%2Fbanner%2Fimage-9UpH3fpH1.jpg&width=1000&resourceKey=pWVdUiFHtKGqyJxESltt&background=no"
                    />
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-flex align-items-center flex-wrap in-stock-cntnr">
                <h4 className="sku-code"> Mã: #0{productDetail.product.productId} </h4>
                <div className="d-flex flex-wrap align-items-center t3-reviewCount me-5">
                  <div className="reviewStars me-2 me-xl-2">
                    <div>
                      <span className="fa-regular fa-star">
                        <FaRegStar />
                      </span>
                      <span className="fa-regular fa-star">
                        <FaRegStar />
                      </span>
                      <span className="fa-regular fa-star">
                        <FaRegStar />
                      </span>
                      <span className="fa-regular fa-star">
                        <FaRegStar />
                      </span>
                      <span className="fa-regular fa-star">
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4
                      className="ms-auto"
                      style={{
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        fontSize: 17,
                        marginBottom: 0
                      }}
                    >

                      <FaCircle className="fa-solid fa-circle"
                        style={{ fontSize: 10, color: "#2dc327" }} />
                      &nbsp; Trong kho{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="approx-div"
                style={{ color: "#919191", fontSize: 15 }}
              >
                <p>
                  <strong style={{ color: "#000" }}>Notes</strong> Khoảng 1 kg mỗi
                  gói
                </p>
              </div>
              <div className="pdp-t3-pricing d-flex space-between-align align-items-baseline">
                <div>
                  <div className="d-flex align-items-center">
                    <span
                      className="t3-mainPrice me-3"
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#40b87b",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {" "}
                      {formatPrice(productDetail.product.salePrice)}{" "}
                      <span
                        style={{
                          fontSize: 18,
                          color: "#acacac!important",
                          fontWeight: 700
                        }}
                      >
                        &nbsp;/&nbsp;{productDetail.product.unit}{" "}
                      </span>
                    </span>
                  </div>
                </div>
                <div />
              </div>
              <div className="you-saave-sec">
                <h4 className="mb-1 mt-2">
                  <span>(Đã bao gồm VAT)</span>
                </h4>
              </div>
              <div />
              <div
                className="mt-4 y-3 px-2 px-lg-3"
                style={{ background: "#f7f7f7", borderRadius: 6, maxWidth: 500 }}
              >
                <div
                  className="delivery-label align-items-center p-2"
                  style={{ background: "#f7f7f7" }}
                >
                  <div
                    className="w-100 d-flex justify-content-between delivery-area"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="flex-wrap m-0">
                      Giao hàng đến: <strong> Đà Nẵng </strong>
                    </p>
                    <span>
                      <i
                        className="fa-solid fa-chevron-right m-1"
                        style={{ color: "rgb(115, 183, 125)" }}
                      />
                    </span>
                  </div>
                  <div className="w-100 d-flex align-items-center">
                    <div style={{ width: "80%" }}>
                      <div className="w-100">
                        <div
                          className="d-flex flex-column"
                          style={{ fontSize: 12 }}
                        >
                          <div>
                            {" "}
                            Đặt hàng trong <span className="ms-1"> 1 phút</span> và nhận giao hàng bằng
                          </div>

                          <div>
                            <p className="flex-wrap m-0">
                              <strong> Hôm nay , ngày 31 tháng 10</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-end"
                      style={{ width: "35%" }}
                    >
                      <img
                        style={{ width: "100%", height: 34, objectFit: "contain" }}
                        src="https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/resources/image-KNe-Fb3KX.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pdp-t3-cart d-flex align-items-center">
                <div className="hear-box-btn">
                  <button className="t3-cart" >

                    <FaShoppingBasket className='fa-shopping' />
                    Add to Bag
                  </button>
                  <button className="t3-wishlist d-flex align-items-center justify-content-center wishlis-mobile-btn">
                    <div />
                    <div className="wish-desktop">

                      <FaRegHeart />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pdp-t3-share d-flex justify-content-lg-start mt-4 align-items-center">
          <h4 className="share-friends-pd">Chia sẻ với bạn bè</h4>
          <div className="socica-icon-wrap">
            <FaFacebookF className="fa-brands fa-facebook-f sb-icon"
              style={{
                color: "#000!important",
                backgroundColor: "transparent!important",
                border: "none !important",
                fontSize: 24,
                margin: 20

              }} />
            <FaWhatsapp className="fa-brands fa-whatsapp"
              style={{
                color: "#000!important",
                backgroundColor: "transparent!important",
                border: "none !important",
                fontSize: 24
              }} />
          </div>
        </div>
      </div>
      <section className="py-4 mt-3"></section>
    </main>
  );
};

export default ProductDetail;
