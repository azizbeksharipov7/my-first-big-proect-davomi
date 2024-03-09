import { ADD_ONE, ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE, REMOVE_ONE } from "./type";

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cartItems:[
                    ...state.cartItems,
                    {
                        ...action.payload,
                        quantity:1
                    },
                ],
            };
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((el)=>el.id!==action.payload),
            };
            
        case ADD_TO_LIKE:
            return{
                ...state,
                likeItems:[
                    ...state.likeItems,
                    {
                        ...action.payload,
                    },
                ],
            };
        case REMOVE_FROM_LIKE:
            return{
                ...state,
                likeItems:state.likeItems.filter((el)=>el.id !==action.payload)
            };
            case ADD_ONE:
                return{
                ...state,
                cartItems:state.cartItems.map(el=>el.id ==action.payload ?{
                    ...el,
                    quantity:el.quantity+1
                }:el)
                }
            case REMOVE_ONE:
                return{
                    ...state, 
                    cartItems: state.cartItems.map(el=>el.id==action.payload ? {
                        quantity:el.quantity-1
                    }:el)

                }    
        
    }
}