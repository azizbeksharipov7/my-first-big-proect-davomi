import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { productsData } from '../../data';
import ProductCard from '../product-card';
const Products = ({props}) => {
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
           <ProductCard data={el}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
