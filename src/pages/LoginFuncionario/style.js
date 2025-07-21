//LoginFuncionario/style.js
import styled from 'styled-components';

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

export const Link = styled.a`
  font-size: 10px;
  color: #5b2c06;
  text-decoration: none;
`;


export const Conteudo = styled.div`
  font-family: 'Georgia', serif;
  font-size: 30px;
  color: #5b2c06;
  margin-top: 20px;
  
`;

 export const ContainerBotoes = styled.div`
   display: flex;
   gap: 20px; /* Espaço entre os botões */
   justify-content: center; /* Centraliza horizontalmente */
   margin-top: 30px;
 `;