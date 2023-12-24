import { createContext, useEffect, useState } from "react";
import all_products from '../Components/assets/all_product';

export const CategogryContext = createContext(null);


const getDefaultCart = ()=>{
    const cart = {};
    for(let i=1; i < all_products.length+1; i++){
        cart[i] = 0 ;
    }
    return cart;
}

const CategogryContextProvider = (props) =>{

    const getCartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || getDefaultCart();

    const [cartItems, setcartItems] = useState(getCartFromLocalStorage);

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cartItems));
        console.log(cartItems);
        console.log(getCartFromLocalStorage);
    },[cartItems]);
    
    const addToCart =(itemId)=>{
        setcartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    }
    const RemoveFromCart =(itemId)=>{
        setcartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const clearCartSection = (itemId)=>{
        setcartItems((prev)=>({...prev, [itemId]:[itemId]-[itemId]}));
    }
    const clearAllCart =()=>{
        setcartItems(getDefaultCart)
    }
    const clculateTotalPrice= ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((product)=>product.id === Number(item));
                 totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }
    const calcCartItems = ()=>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems +=cartItems[item];
            }
        }
        return totalItems;
    }


    const ContextValue = {all_products , cartItems, setcartItems ,addToCart ,RemoveFromCart ,clearCartSection,clculateTotalPrice,clearAllCart,calcCartItems};

    return(
        <CategogryContext.Provider value={ContextValue}>
            {props.children}
        </CategogryContext.Provider>
    )
}

export default CategogryContextProvider;

