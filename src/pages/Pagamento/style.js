import styled from "styled-components";

import grao from '../../image/grao.png';
import telaFundoPagamento from '../../image/telaFundoPagamento.png';

export const PedidoContainer = styled.div`
  width: 500px;

  position: relative;
  font-size: 1rem;
`;


export const Ticket = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${telaFundoPagamento});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

// Cabeçalho "Seu Pedido" com fonte cursiva
export const Titulo = styled.h2`
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
  font-size: 50px;
  text-align: center;
  margin: 0 0 30px 0;
  color: #5a3c28;
  margin-top: -100px;
`;

// Lista de itens do pedido
export const ListaItens = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
`;

// Item individual
export const Item = styled.li`
  font-family: "Georgia", serif;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #c9b8a1;
  padding: 5px 0;
`;

// Linha total com estilo
export const Total = styled.div`
  font-weight: 700;
  font-size: 25px;
  font-family: "Arial Black", Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  border-top: 2px dotted #485341;
  padding-top: 15px;
  margin-bottom: 20px;
`;

// Botões "Adicionar" e "Excluir"
export const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;


// QR Code container
export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 170px;
  margin-top: 60px;
  width: 170px;
  height: 180px;
`;


export const Botao = styled.button`
  background-size: contain;
  border: none;
  padding: 0.5rem 3rem 0.5rem 1rem; 
  font-size: 30px;
  font-weight: bold;
  color: #f9e8d9;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  right: 10px;

  &:hover {
    opacity: 0.8;
  }
`;


export const GraoCafe = styled.img`
  background-image: url(${grao});
  background-size: contain;
  background-repeat: no-repeat;
  width: 70px;
  height: 70px;
  position: absolute;

&.right {
  bottom: 10px;
  right: -60px;
  transform: scaleX(1); /* Espelha para encaixar no novo lado */
}

&.topRight {
  bottom: -60px;
  right: -45px;
  transform: rotate(100deg); /* Ajusta conforme o novo lado */
}

&.left {
  top: -150px;
  left: -50px;
  transform: scaleX(-1); /* Ou remova, se quiser o lado natural */
  transform: rotate(360deg); /* Ou scaleX(1), dependendo do efeito */
  width: 90px;
  height: 90px;
}

&.bottomLeft {
  top: -65px;
  left: -60px;
  transform: rotate(100deg); /* Ou scaleX(1), dependendo do efeito */
 
}


`;