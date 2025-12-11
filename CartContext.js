// Arquivo: /componentes/CartContext.js

'use client'; 

import { createContext, useState, useContext } from 'react';

// 1. Criação do Contexto
const CartContext = createContext();

// 2. Provedor do Contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 

  // Adiciona item (ou aumenta a quantidade)
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

  // Remove um item completamente
  const removeFromCart = (productName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== productName));
  };
  
  // Diminui a quantidade (se for 1, mantém 1, ou você pode ajustar para remover)
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

// 3. Hook customizado para uso
export function useCart() {
  return useContext(CartContext);
}
