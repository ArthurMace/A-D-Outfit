// Atualize o arquivo: /app/layout.js

import "./globals.css";
import Header from "../components/Header";
import { CartProvider } from "./context/CartContext"; // Importa o provedor

export const metadata = {
  title: "Loja",
  description: "Portfólio de roupas com envio para WhatsApp"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* O CartProvider envolve todo o corpo do site */}
      <CartProvider>
        <body className="bg-zinc-950 text-white max-w-5xl mx-auto p-6 font-sans">
          
          <Header /> 
          
          <main className="min-h-[70vh]">
            {children}
          </main>
          
          <footer className="mt-10 py-4 text-center border-t border-zinc-700 opacity-60 text-sm">
            &copy; {new Date().getFullYear()} Loja. Todos os direitos reservados.
          </footer>
          
        </body>
      </CartProvider>
    </html>
  );
}
