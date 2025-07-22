// src/components/CartModal/index.jsx
import React from 'react';
import { ModalOverlay, ModalContainer, ModalHeader, ModalContent, FecharBtn, BotaoFinalizar } from './style';

export default function CartModal({ aberto, onFechar, children, onFinalizar }) {
  if (!aberto) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Carrinho</h2>
          <FecharBtn onClick={onFechar}>×</FecharBtn>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
        <a href="/pagamento"><BotaoFinalizar>Finalizar Compra</BotaoFinalizar></a>
      </ModalContainer>
    </ModalOverlay>
  );
}