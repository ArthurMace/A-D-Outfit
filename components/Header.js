// Arquivo: /componentes/Header.js

'use client'; 

import Link from 'next/link';
// ✅ CORRETO: Usar './' porque o arquivo está ao lado do outro na pasta 'componentes'
import { useCart } from './CartContext'; 

// ... restante do código ...
export default function Header() {
  const { cart } = useCart(); // Acessa o estado do carrinho
  
  // Calcula o número total de itens no carrinho
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0); 

  const links = [
    { name: 'Início', href: '/' },
    { name: 'Masculino', href: '/aplicativo/homens' }, // Ajuste o caminho para sua estrutura
    { name: 'Feminino', href: '/aplicativo/mulheres' }, // Ajuste o caminho para sua estrutura
    { name: 'Acessórios', href: '/aplicativo/acessorios' }, // Ajuste o caminho para sua estrutura
  ];

  return (
    <header className="mb-10 flex flex-col sm:flex-row justify-between items-center py-4 border-b border-zinc-700">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0">
        <Link href="/aplicativo/página">Loja</Link> {/* Link para a sua página principal */}
      </h1>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="hover:text-amber-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ícone de Carrinho (Link para a futura página de carrinho) */}
        <Link href="/aplicativo/carrinho" className="relative p-2 hover:text-amber-400 transition-colors">
            🛒
            {/* Exibe a contagem se houver itens */}
            {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-amber-400 rounded-full">
                    {itemCount}
                </span>
            )}
        </Link>
      </nav>
    </header>
  );
}
