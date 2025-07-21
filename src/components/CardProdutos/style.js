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

export const Titulo = styled.h2`
  background-color: #f9e8d9;
  padding: 12px 40px;
  border-radius: 40px;
  font-family: 'Georgia', serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: #452f15;
  margin: 1rem 0 1rem 20px; /* top 1rem, right 0, bottom 1rem, left 20px */
  text-align: left;
  width: fit-content;
`;


export const GridProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 18px;
  max-width: 900px;
  margin: 0 auto; 
  padding-bottom: 100px; 
`;

