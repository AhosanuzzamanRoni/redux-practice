import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions";

const initialState={
    cart:[],
    products:[
        { name:'lenevo Laptop',id:1},
        { name:'Asus Laptop',id:2},
        { name:'Dell laptop',id:3},
        { name:'Hp laptop',id:4},
        { name:'Toshiba Laptop',id:5}
    ]
}


const cartReducers=( state= initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            // return {
            //     cart:[...state.cart, action.id]
            // } //ES6 USING 
        
            const newItem={
                productId:action.id,
                name:action.name,
                cartId:state.cart.length+1
            }
            const newCart=[...state.cart,newItem];
            return { ...state , cart:newCart}


            case REMOVE_FROM_CART:
                const cartId =action.cartId;
                const remainingCart=state.cart.filter(item=> item.cartId !== cartId);
                return{...state  ,cart:remainingCart}
        default:
            return state;
    }
}
export default cartReducers;