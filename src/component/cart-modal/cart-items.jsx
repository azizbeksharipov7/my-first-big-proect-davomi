import React, { useContext } from 'react'
import { Icons } from '../../assets/icons'
import { UseMainContext } from '../../context/useMainContext'

const CartItems = ({title, price, image, quantity, id}) => {
    const {cartItems, removeFromCart,addOne, removeOne}=useContext(UseMainContext)

    let totalPrice=0
  for (const key of cartItems){
    totalPrice=totalPrice+(key.price*key.quantity)
  }
  console.log(cartItems);

    return (
    <div className="flex items-start gap-3 w-full border-dark-100 border relative ">
             <div className="w-[136px] h-[120px]">
              <img src={image} alt={title} className="w-full h-full object-contain" />
             </div>
             <div className="flex flex-col justify-between">
              <h2 className="text-base font-normal leading-6 text-dark-300">{title}</h2>
              <p className="text-sm font-normal leading-6 text-dark-300">+ Подарок: <span className="text-primary underline text-sm font-normal leading-6">“Приложение к замкам Golden Service”</span></p>
             <div className="flex mt-8 items-center gap-2">
              <button disabled={quantity==1} onClick={()=>removeOne(id)} className="text-dark-300 disabled:text-dark-100 text-base p-4 ">-</button>
              <span className="block py-1 px-5 border-gray border-2 ">{quantity}</span>
              <button onClick={()=>addOne(id)} className="p-4">+</button>
             </div>
             </div>
             <button className="absolute top-2 right-2 p-4" onClick={()=>removeFromCart(id)}>
              <Icons.deleteIcon/>
             </button>
             <p className="absolute bottom-2 right-2 text-dark-300  text-base font-normal">{(price*quantity).toLocaleString()} $</p>
            </div>
  )
}

export default CartItems