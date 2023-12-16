import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anh1 from '../../../assets/images/products/SP1.jpeg';
import Anh2 from '../../../assets/images/products/SP3.jpeg';
import Logo from '../../../assets/images/Logo/LogoGiamGia.png';
import MultipleCarousel from '../../../components/MultipleCarousel/MultipleCarousel'; // Import MultipleCarousel component
import SliderComponent from '../../../components/Carousel/Carousel';
import ListCategoryComponent from '../../../components/ListCategory/ListCategory';
import SectionTopProduct from '../../../components/TopProduct/SectionTopProduct';
import BannerSection from '../../../components/Section/sectionImge';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/product-aciton';
import CategoryComponent from '../../../components/ListCategory/Category';
import LisItemCategory from '../../../components/ListCategory/LisItemCategory';

const Home = () => {
  const dispatch = useDispatch();

  const { Listproduct = [], loading } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchData = async () => {
        await dispatch(fetchProducts());
    };
    fetchData();
}, [dispatch]);

if (loading) {
    return <div>Loading...</div>;
}
console.log("CART",cartItems)

    return (
        <div>
            <SliderComponent />
            <CategoryComponent />
            <LisItemCategory/>

            {/* Multiple Carousel for Trending Products */}


            <MultipleCarousel title="" products={Listproduct} />
            <MultipleCarousel title="" products={Listproduct} />
            <MultipleCarousel title="" products={Listproduct} />
            <SectionTopProduct/>
            <BannerSection/>




        </div>
    )
}

export default Home