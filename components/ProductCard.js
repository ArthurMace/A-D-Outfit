// Arquivo: /componentes/ProductCard.js

'use client'; 

// ❌ ERRO COMUM: Estar usando '../../componentes/CartContext' ou caminhos longos
// ✅ CORRETO: Usar './' porque o arquivo está ao lado do outro na pasta 'componentes'
import { useCart } from './CartContext';

// Desestruturamos as props para capturar todos os dados do produto
export default function ProductCard({ name, price, img, id }){ 
  const { addToCart } = useCart(); // Pegamos a função de adicionar

  // Criamos o objeto 'product' que será adicionado ao carrinho
  const product = {
      id: id || name, // Idealmente use um ID único
      name, 
      price: parseFloat(price.replace(',', '.')), // Converte o preço para número
      img 
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${name} adicionado ao carrinho!`); // Feedback simples
  };

  return (
    <div className="card">
      {/* Certifique-se de que a imagem está configurada corretamente para Next.js */}
      <img src={img} alt={name}/> 
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="opacity-80">R$ {price}</p>
      
      {/* Botão que agora adiciona ao carrinho */}
      <button 
        onClick={handleAddToCart}
        className="btn" 
        style={{ width: '100%', border: 'none', cursor: 'pointer' }} // Ajustes de estilo para botão
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
