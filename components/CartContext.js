// Arquivo: /componentes/CartContext.js

'use client'; 

import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); //

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.name === product.name);

      if (existingItem) {
        return prevCart.map(item => 
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== productName));
  };
  
  const decreaseQuantity = (productName) => {
      setCart(prevCart => {
          return prevCart.map(item => {
              if (item.name === productName && item.quantity > 1) {
                  return { ...item, quantity: item.quantity - 1 };
              }
              return item;
          });
      });
  };
  
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart, removeFromCart, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
