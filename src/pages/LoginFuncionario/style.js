//LoginFuncionario/style.js
import styled from 'styled-components';

export const Botao = styled.button`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  background-color: #c4bba6;  /* Cor de fundo parecida com a da imagem */
  border: 2px solid #5a5a49; /* Borda fina com cor escura */
  border-radius: 20px;        /* Deixa as bordas arredondadas */
  color: #3d3d3d;
  font-weight: bold;
  margin-top: 30px; 
  cursor: pointer;

  &:hover {
    background-color: #b0a48e; /* Cor um pouco mais escura ao passar o mouse */
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