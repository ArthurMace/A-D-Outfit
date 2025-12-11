// Arquivo: /aplicativo/layout.js

import "./globals.css";
// ✅ CORREÇÃO DEFINITIVA: Caminho relativo que sobe um nível (..)
import Header from "../componentes/Header"; 
import { CartProvider } from "../componentes/CartContext"; 

export const metadata = {
  title: "Loja",
  description: "Portfólio de roupas com envio para WhatsApp"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <CartProvider>
        {/* CLASSE BODY PARA VISUAL CLEAN */}
        <body className="bg-white text-black max-w-5xl mx-auto p-6 font-sans">
          
          <Header /> 
          
          <main className="min-h-[70vh]">
            {children}
          </main>
          
          {/* CLASSE FOOTER PARA VISUAL CLEAN */}
          <footer className="mt-10 py-4 text-center border-t border-gray-300 opacity-80 text-sm">
            &copy; {new Date().getFullYear()} Loja. Todos os direitos reservados.
          </footer>
          
        </body>
      </CartProvider>
    </html>
  );
}
