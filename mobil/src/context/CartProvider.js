import { useState, createContext, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
const CartContext = createContext();

export function CartProvider({ children }) {


  const axiosPrivate = useAxiosPrivate()
  const [cart, setCart] = useState({});

  const addToCart = async (meal) => {
    if (cart.includes(meal)) {
      return;
    } else {
      const cartItems = cart;
      cartItems.push(meal);
      setCart((prev) => cartItems);

      try {
        const { data } = await axiosPrivate.put("/user/cart", meal);
        console.log(data, "data");
      } catch (error) {
        console.log(error?.response?.data);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart , addToCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
