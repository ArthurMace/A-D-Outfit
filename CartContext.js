// Crie o arquivo: /app/context/CartContext.js

'use client'; // Necessário pois usaremos hooks do React

import { createContext, useState, useContext } from 'react';

// 1. Criação do Contexto
const CartContext = createContext();

// 2. Provedor do Contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // O estado que guardará os produtos no carrinho

  // Função para adicionar um item ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verifica se o item já está no carrinho
      const existingItem = prevCart.find(item => item.name === product.name);

      if (existingItem) {
        // Se já existe, aumenta a quantidade
        return prevCart.map(item => 
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Se não existe, adiciona com quantidade 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Funções adicionais (remover, diminuir quantidade, etc.) podem ser adicionadas aqui

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook customizado para usar o Contexto em outros componentes
export function useCart() {
  return useContext(CartContext);
}
