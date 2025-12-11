// Arquivo: /componentes/ProductCard.js

'use client'; 

// ✅ CORREÇÃO: Usando o alias padrão da raiz
import { useCart } from '@/componentes/CartContext'; 
import { useState } from 'react';

const availableSizes = ['P', 'M', 'G', 'GG'];
const availableColors = ['Preto', 'Branco', 'Cinza', 'Azul']; 

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
    addToCart(product, quantity);
    alert(`${quantity}x ${name} (${selectedColor}, ${selectedSize}) adicionado(s) ao carrinho!`); 
    setQuantity(1); 
  };

  return (
    <div className="card">
      <img src={img} alt={name}/> 
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="opacity-80">R$ {price}</p>
      
      {/* SELETORES DE VARIAÇÃO */}
      <div className="flex flex-col gap-2 mt-3 text-left">
        <label className="text-xs opacity-70">Tamanho:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="bg-zinc-800 text-sm p-2 rounded-sm" 
        >
          {availableSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <label className="text-xs opacity-70 mt-2">Cor:</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="bg-zinc-800 text-sm p-2 rounded-sm"
        >
          {availableColors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
        
        <label className="text-xs opacity-70 mt-2">Quantidade:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="bg-zinc-800 text-sm p-2 rounded-sm text-center"
        />
      </div>

      <button 
        onClick={handleAddToCart}
        className="btn" 
        style={{ width: '100%' }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
