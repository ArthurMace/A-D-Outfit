// Arquivo: /aplicativo/layout.js

import "./globals.css";
// ✅ CORREÇÃO: Usando caminho relativo para sair de 'aplicativo' e ir para 'components'
import Header from "../components/Header"; 
import { CartProvider } from "../components/CartContext"; 

export const metadata = { /* ... */ };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <CartProvider>
        <body className="bg-white text-black max-w-5xl mx-auto p-6 font-sans">
          <Header /> 
          <main className="min-h-[70vh]">{children}</main>
          <footer className="mt-10 py-4 text-center border-t border-gray-300 opacity-80 text-sm">
            &copy; {new Date().getFullYear()} Loja. Todos os direitos reservados.
          </footer>
        </body>
      </CartProvider>
    </html>
  );
}
