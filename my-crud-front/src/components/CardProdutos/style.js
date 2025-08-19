// src/components/CardProdutos.js
import styled from 'styled-components';


export const Card = styled.button`
  background-color: #f9e8d9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 10px;
  width: 240px;
  height: 100px;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: center;

    &:hover {
    background-color: #a9b2a1;
  }

  &:active {
    background-color: #a9b2a1aa; 
  }
`;

export const Imagem = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
  box-shadow: 0 0 6px #a38566aa;
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Georgia', serif;
`;

export const Nome = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #452f15;
  text-align: center;     
  width: 100%;  
`;

export const Preco = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: #452f15;
  margin-top: 5px;
`;

export const BotaoCarrinho = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f9e8d9;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;

  &:hover {
    background-color: #efd3b6;
  }
`;

export const BotaoAdd = styled.button`
  position: fixed;
  bottom: 20px;
  right: 100px;
  background-color: #f9e8d9;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;

  &:hover {
    background-color: #a9b2a1;
  }

  &:active {
    background-color: #a9b2a1aa; 
  }
`;

export const Titulo = styled.h2`
  background-color: #f9e8d9;
  padding: 12px 40px;
  border-radius: 40px;
  font-family: 'Georgia', serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: #452f15;
  margin: 1rem 0 1rem 20px;
  text-align: left;
  width: fit-content;
   position: absolute;
  margin-top: -580px;
  margin-left: -600px;
`;


export const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px); /* 3 colunas fixas com a largura do card */
  grid-template-rows: repeat(3, 100px); /* 3 linhas fixas com a altura do card */
  gap: 30px;
  max-width: 900px;
  margin: 100px auto 0 auto; /* só aumentando margem superior */;
  padding-bottom: 100px;
`;