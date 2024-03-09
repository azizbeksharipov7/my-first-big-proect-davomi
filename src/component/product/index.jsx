import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { productsData } from '../../data';
import ProductCard from '../product-card';
import { UseMainContext } from '../../context/useMainContext';
const Product = () => {
  const {cartItems, likeItems}=useContext(UseMainContext)
  return (
    <div className="container">
      <h2 className="text-2xl text-dark-300 font-bold my-5">
        Популярные товары
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {productsData.map((el) => (
          <SwiperSlide
            key={el.id}
           >
           <ProductCard data={el} 
           cart={cartItems.some((item)=>item.id==el.id)} 
           like={likeItems.some((item)=>item.id==el.id)}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
