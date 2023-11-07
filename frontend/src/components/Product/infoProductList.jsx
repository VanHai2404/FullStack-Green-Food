import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegHeart,FaShoppingBasket} from 'react-icons/fa';

const InfoProductList  = () => {
  return (
    <div style={{ width: "235.25px" }}>
      <div style={{ background: "rgb(255, 255, 255)", margin: "3% 4% 2%", padding: "0% 0% 2%" }}>
        <div className="cardSia" style={{ height: "100%" }}>
          <div className="listCard3 card h-100" style={{ position: "relative", background: "transparent" }}>
            <div className="h-100">
              <div className="product-imgContainer">
                {/*----*/}
                <a href="/products/product-detail/chiquita-banana/30571000371">
                  <div className="item-heart">
                    <FaRegHeart className="heart-icon"/>
                  </div>
                  <div className="product-imgContainer-img">
                    <img className="laz-img wah-bc" style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="Chiquita Banana" src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/product/30571000371.jpg&amp;width=350&amp;resourceKey=pWVdUiFHtKGqyJxESltt&amp;jpeg=true" />
                  </div>
                </a>
              </div>
              <div className="listCard3-contentWrap d-flex flex-column">
                <div className="spec-images">
                  <img src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/other/image-EQOx8FPd3.png&amp;width=600&amp;background=no&amp;png=true&amp;resourceKey=pWVdUiFHtKGqyJxESltt" alt="spec-images" />
                </div>
                <div className="country">Ecuador </div>
                <a href="/products/product-detail/chiquita-banana/30571000371">
                  <div className="d-flex listCard3-head-container">
                    <h2 className="listCard3-head elspsisClass" style={{ color: "rgb(0, 0, 0)", fontSize: "16px", fontFamily: "Tajawal", fontWeight: "800" }}> Chiquita Banana </h2>
                    <p className="card-text-dumy"> 13 kg per Box </p>
                  </div>
                  <div className="pro-price d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <span id="pro-mainPrice" className="df">AED 79.95</span>
                      <span id="priceUnit1" style={{ textTransform: "capitalize" }}>/ BOX</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline w-100 justify-content-between">
                    <span id="pro-subPrice" className="blank-div" style={{ visibility: "hidden" }}>AED .</span>
                  </div>
                </a>
                <div className="cartStrip add-to-cart-btn"><FaShoppingBasket className="fa-basket-shopping"/> Add to Bag </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProductList ;
