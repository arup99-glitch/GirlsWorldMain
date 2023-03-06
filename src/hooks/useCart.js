import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useCart = () => {

    const [cart, setCart] = useState(getOrSetCart());

    function getOrSetCart() {
        const localCart = JSON.parse(localStorage.getItem("localCart"));
        if (!localCart) {
            localStorage.setItem('localCart', JSON.stringify([]));
            return localCart = [];
        }
        return localCart;
    }
    function clearCart() {
        localStorage.setItem('localCart', JSON.stringify([]));
        return setCart([]);
    }

    function addToCart(item) {
        const prev = cart.find(itm => itm.id === item.id);
        if (!prev) {
            setCart(data => ([...data, { ...item, quantity: 1 }]));
        }
        else {
            setCart(data => data.filter(itm => {
                if (itm.id === item.id) {
                    itm.quantity += 1;
                }
                return itm;
            }));
        }
    }

    function removeItem(idOfData) {
        setCart(data => data.filter(d => {
            if (!(d.id === idOfData)) return d;
        }));
    }

    function decreaseQuantity(idOfItem) {
        setCart(data => data.filter(d => {
            if (!(d.id === idOfItem)) { return d }
            else if (d.id === idOfItem && d.quantity >= 1) {
                d.quantity -= 1;
                return d;
            };
        }))
    }
    function increaseQuantity(idOfItem) {
        setCart(data => data.filter(d => {
            if (!(d.id === idOfItem)) { return d }
            else if (d.id === idOfItem && d.quantity >= 1) {
                d.quantity += 1;
                return d;
            };
        }))
    }

    useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(cart));
    }, [cart])


    return {
        cart, // ok
        setCart, // ok
        clearCart, // ok
        addToCart, // ok
        removeItem, // ok
        decreaseQuantity, // ok
        increaseQuantity // ok
    }
};

export default useCart;