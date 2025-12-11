import Link from "next/link";

export default function Home(){
  return(
    <main className="flex flex-col gap-4">
      <Link className="btn" href="/homens">Roupas Masculinas</Link>
      <Link className="btn" href="/mulheres">Roupas Femininas</Link>
      <Link className="btn" href="/acessorios">Acessórios</Link>
    </main>
  );
}