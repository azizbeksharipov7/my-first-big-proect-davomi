import React from 'react';
import { Icons } from '../../assets/icons';

const ProductCard = ({ data }) => {
  const { title, image, price } = data;
  return (
    <div className="relative h-[403px] border-2 border-gray">
      <img
        src={image}
        alt={title}
        className="mt-12 block mx-auto"
      />
      <h2 className="mt-3 text-lg font-normal leading-5 w-[230px] mx-auto text-center">
        {title}
      </h2>
      <span className="mt-6 block text-center font-bold text-[30px] leading-9">
        {price}
      </span>
      <button className="absolute top-4 right-4">
        <Icons.likeIcon />
      </button>
      <button className="absolute bottom-0 right-0 py-2 px-4 bg-primary rounded-tl-[10px]">
        <Icons.shoppingCartIcon color="#fff" />
      </button>
    </div>
  );
};

export default ProductCard;
