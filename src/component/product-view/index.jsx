import React from 'react';

const ProductView = ({image, title, price}) => {
  return (
    <div className="w-[500px] rounded h-full relative">
      <div className="w-full h-[375px] ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain mt-12"
        />
      </div>
      <span className="py-3 px-6 bg-primary text-white rounded uppercase text-sm font-normal leading-[18px] absolute top-0 left-0">
        sale
      </span>

      <span className="text-center block top-11 right-2 text-3xl mt-4 text-dark-100 line-through">
        1 200 475 ₽
      </span>
      <span className="block mt-2 text-center text-[40px] leading-[48px] font-bold">
        {price} ₽
      </span>
      <span className="text-primary text-sm leading-[18px] mt-4 block text-center">
        Нашли дешевле? Снизим цену!
      </span>
    </div>
  );
};

export default ProductView;
