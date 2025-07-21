import styled from 'styled-components';

export const BotaoVoltar = styled.button`
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
  left: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;