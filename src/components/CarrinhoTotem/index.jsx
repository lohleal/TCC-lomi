// src/components/CarrinhoTotem.jsx
import React, { useState } from 'react';
import { BotaoCarrinho } from '../CardProdutos/style';
import CartModal from '../../components/CartModal';

function CarrinhoTotem() {
  const [modalAberto, setModalAberto] = useState(false);

  const itensFixos = [
    { nome: 'Café Expresso', tamanho: 'Pequeno', preco: 'R$ 5,00' },
    { nome: 'Cappuccino', tamanho: 'Médio', preco: 'R$ 7,00' },
    { nome: 'Latte', tamanho: 'Grande', preco: 'R$ 8,00' },
  ];

  return (
    <>
      <BotaoCarrinho onClick={() => setModalAberto(true)}>
        <span className="material-symbols-outlined">shopping_cart</span>
      </BotaoCarrinho>

      <CartModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        titulo="Seu Pedido"
        textoBotao="Confirmar Pedido"
        linkBotao="/pagamento"
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {itensFixos.map((item, i) => (
            <li key={i}>
              {item.nome} - {item.tamanho} - {item.preco}
            </li>
          ))}
        </ul>
      </CartModal>
    </>
  );
}

export default CarrinhoTotem;
