// Arquivo: /componentes/CartContext.js

'use client'; 

import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 

  // NOVO addToCart: Agora aceita 'product' (que inclui size/color) e a 'qty'
  const addToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      // Cria uma chave única para o item (Nome + Cor + Tamanho)
      const uniqueKey = `${product.name}-${product.color || ''}-${product.size || ''}`;
      
      // Procura o item existente com essa chave única
      const existingItem = prevCart.find(item => 
        `${item.name}-${item.color || ''}-${item.size || ''}` === uniqueKey
      );

      if (existingItem) {
        return prevCart.map(item => 
          item === existingItem
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: qty }];
      }
    });
  };

  const removeFromCart = (uniqueItemKey) => {
    setCart(prevCart => prevCart.filter(item => 
        `${item.name}-${item.color || ''}-${item.size || ''}` !== uniqueItemKey
    ));
  };
  
  const decreaseQuantity = (uniqueItemKey) => {
      setCart(prevCart => {
          return prevCart.map(item => {
              if (`${item.name}-${item.color || ''}-${item.size || ''}` === uniqueItemKey && item.quantity > 1) {
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
