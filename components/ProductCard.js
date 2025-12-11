// Arquivo: /componentes/ProductCard.js

'use client'; 

import { useCart } from '@/componentes/CartContext'; 
import { useState } from 'react';

// Variações que o cliente pode escolher:
const availableSizes = ['P', 'M', 'G', 'GG'];
const availableColors = ['Preto', 'Branco', 'Cinza']; 

export default function ProductCard({ name, price, img, id }){
  const { addToCart } = useCart(); 
  
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [quantity, setQuantity] = useState(1);

  const product = {
      id: id || name, 
      name, 
      price: parseFloat(price.replace(',', '.')), 
      img,
      size: selectedSize, 
      color: selectedColor,
  };

  const handleAddToCart = () => {
    // Passa a variação e a quantidade para o Context
    addToCart(product, quantity); 
    alert(`${quantity}x ${name} (${selectedColor}, ${selectedSize}) adicionado(s) ao carrinho!`); 
    setQuantity(1); // Reseta a quantidade após adicionar
  };

  return (
    <div className="card">
      <img src={img} alt={name}/> 
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="opacity-80">R$ {price}</p>
      
      {/* SELETORES DE VARIAÇÃO */}
      <div className="flex flex-col gap-2 mt-3">
        {/* Seletor de Tamanho */}
        <label className="text-sm text-left opacity-80">Tamanho:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="bg-zinc-800 text-white p-2 rounded-lg text-sm"
        >
          {availableSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        {/* Seletor de Cor */}
        <label className="text-sm text-left opacity-80 mt-2">Cor:</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="bg-zinc-800 text-white p-2 rounded-lg text-sm"
        >
          {availableColors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
        
        {/* Seletor de Quantidade */}
        <label className="text-sm text-left opacity-80 mt-2">Quantidade:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="bg-zinc-800 text-white p-2 rounded-lg text-sm text-center"
        />
      </div>

      <button 
        onClick={handleAddToCart}
        className="btn" 
        style={{ width: '100%', border: 'none', cursor: 'pointer' }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
