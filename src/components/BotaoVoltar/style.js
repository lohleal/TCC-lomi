import styled from 'styled-components';
import xicara from '../../image/xicara.png';

export const BotaoVoltar = styled.button`
  background: url(${xicara}) no-repeat center right;
  background-size: contain;
  border: none;
  padding: 0.5rem 3rem 0.5rem 1rem; /* espaço para o ícone */
  font-size: 30px;
  font-weight: bold;
  color: #3d3d3d;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;