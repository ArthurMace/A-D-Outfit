// Arquivo: /aplicativo/acessorios/page.js

import ProductCard from "@/componentes/ProductCard";

export default function Acessorios() {
  const produtos = [
    { id: 'bone-001', name: "Boné Estiloso", price: "59,90", img: "https://via.placeholder.com/300/CCCCCC/1A1A1A?text=BONE" },
    { id: 'meia-002', name: "Meia Esportiva", price: "29,90", img: "https://via.placeholder.com/300/CCCCCC/1A1A1A?text=MEIA" },
    { id: 'relogio-003', name: "Relógio Digital", price: "129,90", img: "https://via.placeholder.com/300/CCCCCC/1A1A1A?text=RELOGIO" },
  ];

  return (
    <main>
      <h2 className="text-3xl font-bold mb-8">Acessórios</h2>
      <div className="grid">
        {produtos.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
