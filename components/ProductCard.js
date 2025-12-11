// Arquivo: /componentes/ProductCard.js

'use client'; 

// IMPORTAÇÃO CORRETA: O CartContext está na mesma pasta.
import { useCart } from './CartContext'; 

export default function ProductCard({ name, price, img, id }){
  const { addToCart } = useCart(); 

  const product = {
      id: id || name, 
      name, 
      price: parseFloat(price.replace(',', '.')), 
      img 
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${name} adicionado ao carrinho!`); 
  };

  return (
    <div className="card">
      <img src={img} alt={name}/> 
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="opacity-80">R$ {price}</p>
      
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
