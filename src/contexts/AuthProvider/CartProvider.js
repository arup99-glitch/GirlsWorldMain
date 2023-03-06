import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';


export const CartCtx = createContext();
const CartProvider = ({ children }) => {
    const cartUsage = useCart();
    return (
        <CartCtx.Provider value={cartUsage}>
            {children}
        </CartCtx.Provider>
    );
};

export default CartProvider;