// Arquivo: /componentes/CartContext.js - SOMENTE A FUNÇÃO addToCart MUDOU

// ... (restante das importações e definição do createContext)

// 2. Provedor do Contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 

  // NOVO addToCart: Agora aceita 'product' (que inclui size/color) e a 'qty'
  const addToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      // Cria uma chave única para o item (Nome + Cor + Tamanho)
      const uniqueKey = `${product.name}-${product.color}-${product.size}`;
      
      // Procura o item existente com essa chave única
      const existingItem = prevCart.find(item => 
        `${item.name}-${item.color}-${item.size}` === uniqueKey
      );

      if (existingItem) {
        return prevCart.map(item => 
          item === existingItem
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        // Se for um item novo, adiciona o produto com a variação e a quantidade inicial
        return [...prevCart, { ...product, quantity: qty }];
      }
    });
  };

  // ... (o restante das funções removeFromCart, decreaseQuantity, etc. permanecem as mesmas)
}

// ... (o restante do código)
