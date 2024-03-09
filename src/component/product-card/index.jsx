import React, { useContext, useReducer } from 'react';
import { Icons } from '../../assets/icons';
import { reducer } from '../../reduce/store';
import { UseMainContext } from '../../context/useMainContext';
import clsx from 'clsx';

const ProductCard = ({ data,cart, like }) => {
  const { title, image, price } = data;
  const {addToCart, removeFromCart, addToLike, removeFromLike}=useContext(UseMainContext)
  console.log(addToCart);
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
        {price.toLocaleString()} $
      </span>
      <button onClick={()=>(like ? removeFromLike(data.id):addToLike(data))}
       className="absolute top-4 right-4">
        <Icons.likeIcon color={like && "red"} />
      </button>
      <button onClick={()=>(cart ? removeFromCart(data.id):addToCart(data))} 
      className={clsx(
        `${cart? "border border-primary": "border-none bg-primary" } absolute bottom-0 right-0 py-2 px-4 rounded-tl-[10px] border border-primary `
      )}>
        <Icons.shoppingCartIcon color={cart ? 'rgb(28, 98, 205)':'#fff'} />
      </button>
    </div>
  );
};

export default ProductCard;
