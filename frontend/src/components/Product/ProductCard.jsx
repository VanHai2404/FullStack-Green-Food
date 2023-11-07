import React from 'react';
import  './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegHeart,FaShoppingBasket} from 'react-icons/fa';

const ProductCard = ({ product }) => {
    
  return (
    <div className="pro">
 
        <div className="item-label">
        {product.isFavorite && (
          <img src={product.discountLabel} alt="" className="lb-tragop" />
          )}
        </div>
      <div className="item-heart">
        <FaRegHeart/>
      </div>
      
      <img src={product.image} alt={product.name} />
      <div className="des">
        <span id="Nation">{product.nation}</span>
        <h5 className="title">{product.name}</h5>
        <div className="pro-price d-flex flex-column">
          <div className="d-flex align-items-center">
            <span id="pro-mainPrice" className="df">
              {product.price}
            </span>
            <span id="priceUnit1" className="price-unit" style={{
      textTransform: 'capitalize',
      color: '#acacac',
      fontSize: '16px'
    }}>
              / {product.unit}
            </span>
          </div>
        </div>
      </div>
      <div className= "cartStrip add-to-cart-btn">
      <FaShoppingBasket className='fa-solid fa-basket-shopping'/> Add to Bag
      </div>
    </div>
  );
};

export default ProductCard;
