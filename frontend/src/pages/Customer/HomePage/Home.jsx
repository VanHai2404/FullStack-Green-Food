import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anh1 from '../../../assets/images/products/SP1.jpeg';
import Anh2 from '../../../assets/images/products/SP3.jpeg';
import Logo from '../../../assets/images/Logo/LogoGiamGia.png';
import MultipleCarousel from '../../../components/MultipleCarousel/MultipleCarousel'; // Import MultipleCarousel component
import SliderComponent from '../../../components/Carousel/Carousel';
import ListCategoryComponent from '../../../components/ListCategory/ListCategory';
import SectionTopProduct from '../../../components/TopProduct/SectionTopProduct';
import BannerSection from '../../../components/Section/sectionImge';

const Home = () => {

    const productsL =[
        {
          "id": 1,
          "name": "Chim Ớt Đỏ Thái Lan",
          "nation": "Thailand",
          "image": Anh1,
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": true,
        
        },
        {
          "id": 2,
          "name": "Chim Ớt Xanh Thái Lan",
          "nation": "Thailand",
          "image": "https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/product/9910053.jpg&width=350&resourceKey=pWVdUiFHtKGqyJxESltt&jpeg=true",
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": true,
        
        },
        {
          "id": 3,
          "name": "Chim Ớt Đỏ Thái Lan",
          "nation": "Thailand",
          "image": Anh2,
          "price": "89,500₫",
          "unit": "GÓI",
          "discountLabel": Logo,
          "isFavorite": false,
      
        },
        {
          "id": 4,
          "name": "Su su xanh",
          "nation": "Thailand",
          "image": "https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/banner/image-ybokEV1i0.jpeg&width=350&resourceKey=pWVdUiFHtKGqyJxESltt&jpeg=true",
          "price": "89,500₫",
          "unit": "GÓI",
          "discountLabel": Logo,
          "isFavorite": true,
      
        },
        {
          "id": 5,
          "name": "Xà lách đỏ",
          "nation": "Netherlands",
          "image": 'https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/product/9910189.jpg&width=350&resourceKey=pWVdUiFHtKGqyJxESltt&jpeg=true',
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": false,
        
        },
        {
          "id": 6,
          "name": "Chim Ớt Đỏ Thái Lan",
          "nation": "Thailand",
          "image": Anh2,
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": false,
        
        },
        {
          "id": 7,
          "name": "Chim Ớt Đỏ Thái Lan",
          "nation": "Thailand",
          "image": Anh1,
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": false,
        
        },
        {
          "id": 8,
          "name": "Chim Ớt Đỏ Thái Lan",
          "nation": "Thailand",
          "image": Anh2,
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": false,
        
        },
        {
          "id": 9,
          "name": "Xà lách đỏ",
          "nation": "Netherlands",
          "image": 'https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/pWVdUiFHtKGqyJxESltt/product/9910189.jpg&width=350&resourceKey=pWVdUiFHtKGqyJxESltt&jpeg=true',
          "price": "89,500₫",
          "unit": "KG",
          "discountLabel": Logo,
          "isFavorite": false,
        
        }
      ];
    return (
        <div>
            <SliderComponent />
            <ListCategoryComponent />

            {/* Multiple Carousel for Trending Products */}


            <MultipleCarousel title="Đang Giảm Giá" products={productsL} />

            {/* Multiple Carousel for Hot Products */}
            <MultipleCarousel title="Hot" products={productsL} />

            {/* Multiple Carousel for Favorite Products */}
            <MultipleCarousel title="Sản Phẩm Ưa Thích" products={productsL} />
            <SectionTopProduct/>
            <BannerSection/>




        </div>
    )
}

export default Home