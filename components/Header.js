// Arquivo: /componentes/Header.js

'use client'; 

import Link from 'next/link';
// IMPORTAÇÃO CORRETA: O CartContext está na mesma pasta.
import { useCart } from './CartContext'; 

export default function Header() {
  const { cart } = useCart();
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0); 

  const links = [
    { name: 'Início', href: '/aplicativo/página' },
    { name: 'Masculino', href: '/aplicativo/homens' },
    { name: 'Feminino', href: '/aplicativo/mulheres' },
    { name: 'Acessórios', href: '/aplicativo/acessorios' },
  ];

  return (
    <header className="mb-10 flex flex-col sm:flex-row justify-between items-center py-4 border-b border-zinc-700">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0">
        <Link href="/aplicativo/página" className="hover:text-amber-400 transition-colors">Loja</Link>
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

        <Link href="/aplicativo/carrinho" className="relative p-2 hover:text-amber-400 transition-colors">
            🛒
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
