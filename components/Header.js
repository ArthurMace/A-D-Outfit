// Arquivo: /componentes/Header.js

'use client'; 

import Link from 'next/link';
// ✅ CORREÇÃO: Importação local
import { useCart } from './CartContext'; 

export default function Header() {
  const { cart } = useCart();
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0); 

  // Ajuste os links para a estrutura /aplicativo/nome_da_pasta
  const links = [
    { name: 'Início', href: '/aplicativo' }, 
    { name: 'Masculino', href: '/aplicativo/homens' },
    { name: 'Feminino', href: '/aplicativo/mulheres' },
    { name: 'Acessórios', href: '/aplicativo/acessorios' },
  ];

  return (
    <header className="mb-10 flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-300">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0">
        <Link href="/aplicativo" className="hover:text-gray-600 transition-colors">Loja</Link>
      </h1>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="hover:text-gray-600 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/aplicativo/carrinho" className="relative p-2 hover:text-gray-600 transition-colors">
            🛒
            {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">
                    {itemCount}
                </span>
            )}
        </Link>
      </nav>
    </header>
  );
}
