// Arquivo: /aplicativo/page.js

import Link from "next/link";

export default function Home(){
  return(
    <main className="flex flex-col gap-6 text-center mt-10">
      <h2 className="text-3xl font-bold mb-4">Bem-vindo à Loja</h2>
      <p className="opacity-80 max-w-sm mx-auto">Explore nossas categorias de produtos. Clique para começar a montar seu carrinho!</p>
      
      <div className="flex flex-col gap-4 max-w-xs mx-auto mt-6">
        <Link className="btn bg-gray-100 text-black hover:bg-gray-200" href="/aplicativo/homens">Roupas Masculinas</Link>
        <Link className="btn bg-gray-100 text-black hover:bg-gray-200" href="/aplicativo/mulheres">Roupas Femininas</Link>
        <Link className="btn bg-gray-100 text-black hover:bg-gray-200" href="/aplicativo/acessorios">Acessórios</Link>
      </div>
    </main>
  );
}
