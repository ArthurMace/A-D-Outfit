export default function ProductCard({ name, price, img }){
  const msg = encodeURIComponent(`Olá! Gostaria de comprar:\nProduto: ${name}\nPreço: R$ ${price}`);
  const link = `https://wa.me/5571999999999?text=${msg}`;

  return (
    <div className="card">
      <img src={img} alt={name}/>
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="opacity-80">R$ {price}</p>
      <a className="btn" href={link} target="_blank">Comprar no WhatsApp</a>
    </div>
  );
}