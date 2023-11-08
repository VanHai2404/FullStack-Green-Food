import React from "react";
import  './ProductCard.css';
import { FaRegHeart,FaShoppingBasket} from 'react-icons/fa';
const  InfoProductTop=()=>{
    return (
        <div style={{ background: 'rgb(255, 255, 255)', margin: '4% 2% 0%', padding: '3% 3% 1%' }}>
          <div className="cardSiaTop" style={{ height: '100%' }}>
            <div className="card h-100" style={{ position: 'relative', background: 'transparent' }}>
              <div className="row">
                <div className="col-md-5 col-lg-5 col-sm-5 col-5">
                  <div className="product-imgContainer">
                    <a href="/products/product-detail/chiquita-banana-organic/9910039">
                      <img
                        className="laz-img wah-bc"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        alt="Chiquita Chuối Hữu Cơ"
                        src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/banner/image-PXpLSuDHz.jpg&amp;width=1000&amp;resourceKey=pWVdUiFHtKGqyJxESltt&amp;jpeg=true"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                  <div className="align-items-center listCard3-head-container">
                    <h2 className="listCard3-head elepsis-card" style={{ color: 'rgb(17, 17, 17)', fontSize: '25px', fontWeight: '400' }}>
                      Chiquita Chuối Hữu Cơ
                    </h2>
                    <span id="pro-mainPrice">
                      89,500₫ <span className="selas-unit">/</span> <span id="priceUnit1">GÓI</span>
                    </span>
                    <div className="cartStrip mt-auto add-to-cart-btn">
                     <FaShoppingBasket className="fa-basket-shopping"/> Add to Bag
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );


};
export default InfoProductTop;