import "./globals.css";

export const metadata = {
  title: "Loja",
  description: "Portfólio de roupas com envio para WhatsApp"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-950 text-white max-w-5xl mx-auto p-6 font-sans">
        <header className="mb-10">
          <h1 className="text-3xl font-bold">Loja</h1>
        </header>
        {children}
      </body>
    </html>
  );
}