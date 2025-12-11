// Arquivo: /aplicativo/layout.js

import "./globals.css";
// ✅ CORREÇÃO: Usando o Alias para caminhos absolutos
import Header from "@/componentes/Header"; 
import { CartProvider } from "@/componentes/CartContext"; 

// ... (restante do código permanece igual)
export const metadata = {
  title: "Loja",
  description: "Portfólio de roupas com envio para WhatsApp"
};

export default function RootLayout({ children }) {
  return (
   <html lang="pt-br">
      <CartProvider>
        <body className="bg-white text-black max-w-5xl mx-auto p-6 font-sans"> 
          
          <Header /> 
          
          <main className="min-h-[70vh]">
            {children}
          </main>
          
          <footer className="mt-10 py-4 text-center border-t border-gray-300 opacity-80 text-sm">
            &copy; {new Date().getFullYear()} Loja. Todos os direitos reservados.
          </footer>
          
        </body>
      </CartProvider>
    </html>
  );
}
