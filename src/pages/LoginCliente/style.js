import styled from 'styled-components';
import xicara from '../../image/xicara.png';

export const Conteudo = styled.div`
  font-family: 'Georgia', serif;
  font-size: 40px;
  color: #5b2c06;
  margin-top: 40px;
  margin-bottom: 15px;
`;


export const BotaoXicara = styled.button`
  background: url(${xicara}) no-repeat center right;
  background-size: contain;
  border: none;
  padding: 0.5rem 3rem 0.5rem 1rem; /* espaço para o ícone */
  font-size: 1rem;
  font-weight: bold;
  color: #3d3d3d;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`;