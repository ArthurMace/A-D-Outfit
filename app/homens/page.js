import ProductCard from "../../components/ProductCard";

export default function Homens(){
  return(
    <main className="grid">
      <ProductCard name="Camiseta Dry Fit" price="59,90" img="https://via.placeholder.com/300"/>
      <ProductCard name="Bermuda Fitness" price="79,90" img="https://via.placeholder.com/300"/>
      <ProductCard name="Regata" price="49,90" img="https://via.placeholder.com/300"/>
    </main>
  );
}