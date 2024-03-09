import { createContext, useEffect, useReducer, useState } from 'react';
import { reducer } from '../reduce/store';
import { ADD_ONE, ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE, REMOVE_ONE } from '../reduce/type';

export const UseMainContext = createContext(null);

export function MainContextProvider({ children }) {
 const initialState= {
    cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
    likeItems:JSON.parse(localStorage.getItem("likeItems")) || [],
  }

const [state , dispatch]=useReducer(reducer,initialState)

console.log(state.cartItems);
const addToCart=(data)=>dispatch({type:ADD_TO_CART, payload:data});
const addToLike=(data)=>dispatch({type:ADD_TO_LIKE, payload:data});
const addOne=(id)=>dispatch({type:ADD_ONE,payload:id})
console.log(state.likeItems);

const removeFromCart=(id)=>dispatch({type:REMOVE_FROM_CART, payload:id});
const removeFromLike=(id)=>dispatch({type:REMOVE_FROM_LIKE, payload:id});
const removeOne=(id)=>dispatch({type:REMOVE_ONE,payload:id})
useEffect(()=>{
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
}, [state.cartItems]);
useEffect(()=>{
  localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
}, [state.likeItems]);
  return (
    <UseMainContext.Provider value={{addToCart, removeFromCart,addToLike, removeFromLike, addOne, removeOne,cartItems:state.cartItems, likeItems:state.likeItems}} >{children}</UseMainContext.Provider>
  );
}
