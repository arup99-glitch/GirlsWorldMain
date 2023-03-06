import { useContext } from "react";
import { CartCtx } from "../contexts/AuthProvider/CartProvider";
const useGirlsWorldCart = () => {
    const cart = useContext(CartCtx)
    return cart;
};

export default useGirlsWorldCart;