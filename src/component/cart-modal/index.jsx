import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { UseMainContext } from "../../context/useMainContext";
import { Icons } from "../../assets/icons";
import CartItems from "./cart-items";
import { Link } from "react-router-dom";
 
export function CartModal({open, handleModal}) {
  const {cartItems}=useContext(UseMainContext)

  let totalPrice=0
  for (const key of cartItems){
    totalPrice=totalPrice+(key.price*key.quantity)
  }

  function checkPath(){
    if (location.pathname=='/'){
     handleModal();
    } else{
      handleModal();
      window.location.href='/'
    }
  }

  console.log(cartItems);
  return (
    <>
      <Dialog open={open} handler={handleModal}>
        <DialogHeader>Its a cart</DialogHeader>
        <DialogBody>
         
        <div className="flex flex-col gap-4 h-[500px] overflow-y-auto">
        {
          cartItems.map(el=>(
            <CartItems key={el.id} {...el}/>
          ))
         }
        </div>
        </DialogBody>
        <DialogFooter className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
        <h2 className="text-base font-normal leading-6 text-dark-300">Итого: <span className="font-bold text-lg">{totalPrice.toLocaleString()}</span></h2>
         <button className="text-white text-base font-semibold leading-6 bg-primary py-2 px-8">Оформить заказ</button>
        </div>
        <button onClick={checkPath} to={"/"} className="py-2 px-6 border-2 border-primary text-base font-normal text-primary">Продолжить покупки</button>
        </DialogFooter>
      </Dialog>
    </>
  );
}