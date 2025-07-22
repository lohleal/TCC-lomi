import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  FecharBtn,
  BotaoFinalizar
} from './style';

export default function CartModal({
  aberto,
  onFechar,
  children,
  titulo = "Carrinho",
  textoBotao = "Finalizar Compra",
  linkBotao = "/pagamento" // novo: torna o link reutilizável
}) {
  if (!aberto) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{titulo}</h2>
          <FecharBtn onClick={onFechar}>×</FecharBtn>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <a href={linkBotao}>
          <BotaoFinalizar>{textoBotao}</BotaoFinalizar>
        </a>
      </ModalContainer>
    </ModalOverlay>
  );
}
