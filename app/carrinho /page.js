// Arquivo: /aplicativo/carrinho/page.js

'use client'; 

// ✅ CORREÇÃO: Usando o alias @/
import { useCart } from '@/componentes/CartContext'; 
import Link from 'next/link';
import { useMemo } from 'react';

// Função para gerar o link do WhatsApp com todas as variações
function generateWhatsAppLink(cart, total) {
  // 🚨 ATENÇÃO: SUBSTITUA COM SEU NÚMERO DE TELEFONE (com código do país e DDD, sem símbolos)
  const phoneNumber = '5571999999999'; 
  let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';

  cart.forEach(item => {
    const priceFormatted = (item.price * item.quantity).toFixed(2).replace('.', ','); 
    
    // Inclui Cor e Tamanho na mensagem
    const variations = [];
    if (item.color) variations.push(`Cor: ${item.color}`);
    if (item.size) variations.push(`Tamanho: ${item.size}`);
    
    message += `- ${item.name} (${variations.join(', ')}) | Qtd: ${item.quantity} | Total: R$ ${priceFormatted}\n`;
  });

  const totalFormatted = total.toFixed(2).replace('.', ',');
  message += `\nTotal do Pedido: R$ ${totalFormatted}\n\n`;
  message += 'Aguardo o contato para finalizar a compra e pagamento.';

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export default function CartPage() {
  const { cart, removeFromCart, decreaseQuantity, addToCart, clearCart } = useCart();

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio 😔</h2>
        <Link href="/aplicativo" className="btn inline-block">
          Ver Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-300 pb-3">Seu Pedido</h2>

      {/* Lista de Itens */}
      {cart.map((item) => {
        // Chave única para controle de quantidade/remoção
        const uniqueKey = `${item.name}-${item.color || ''}-${item.size || ''}`;

        return (
          <div key={uniqueKey} className="flex justify-between items-center py-4 border-b border-gray-200">
            <div className="flex items-start space-x-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs opacity-70">
                    {item.color && `Cor: ${item.color}`} 
                    {item.color && item.size && ` / `}
                    {item.size && `Tamanho: ${item.size}`}
                </p>
                <p className="text-sm mt-1 font-medium">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>

                {/* Controles de Quantidade */}
                <div className="flex items-center space-x-2 mt-2">
                  <button 
                      onClick={() => decreaseQuantity(uniqueKey)}
                      className="px-2 py-0.5 border border-gray-300 rounded-sm text-sm hover:bg-gray-100"
                  >
                      -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button 
                      onClick={() => addToCart(item, 1)} // Reutiliza addToCart, enviando 1
                      className="px-2 py-0.5 border border-gray-300 rounded-sm text-sm hover:bg-gray-100"
                  >
                      +
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(uniqueKey)}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Remover
            </button>
          </div>
        );
      })}

      {/* Total e Checkout */}
      <div className="mt-8 pt-4 border-t border-gray-300">
        <div className="flex justify-between text-2xl font-bold mb-6">
          <span>Total:</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
        
        <a 
          href={generateWhatsAppLink(cart, total)}
          target="_blank"
          className="btn bg-green-600 hover:bg-green-700 text-white w-full text-center text-lg py-3"
          rel="noopener noreferrer"
        >
          Finalizar Pedido via WhatsApp 💬
        </a>
        <button
          onClick={clearCart}
          className="btn bg-gray-200 hover:bg-gray-300 text-black w-full text-center text-sm mt-2"
        >
          Limpar Carrinho
        </button>
      </div>
    </div>
  );
}
