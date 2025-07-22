import styled from "styled-components";


// Caixa do pedido com bordas arredondadas recortadas (imitando a imagem)
export const PedidoContainer = styled.div`
  background-color: #f9e0d3;
  width: 320px;
  padding: 15px 20px 30px 20px;
  border-radius: 0 0 30px 30px / 0 0 40px 40px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  position: relative;
  font-size: 1rem;
`;

// Cabeçalho "Seu Pedido" com fonte cursiva
export const Titulo = styled.h2`
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  margin: 0 0 20px 0;
  color: #5a3c28;
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
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #c9b8a1;
  padding: 5px 0;
`;

// Linha total com estilo
export const Total = styled.div`
  font-weight: 700;
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
`;

export const Botao = styled.button`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  background-color: #c4bba6;  
  border: 2px solid #5a5a49; 
  border-radius: 20px;        
  color: #3d3d3d;
  font-weight: bold;
  margin-top: 30px; 
  cursor: pointer;
  margin-bottom: 10px;


  &:hover {
    background-color: #b0a48e;
    color: #000;
  }
`;
