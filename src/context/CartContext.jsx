import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Updated: expect product, unit, and price
  const addToCart = (product, unit, price) => {
    const cartItem = {
      cartId: Date.now(), // unique
      productId: product.id,
      name: product.name,
      image: product.image,
      unit,
      price
    };

    setCart((prev) => [...prev, cartItem]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
