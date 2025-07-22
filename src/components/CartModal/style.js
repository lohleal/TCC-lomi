// src/components/CarrinhoModal/style.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 600px;
  height: 500px;
  max-width: 90%;
  margin: 100px auto;
  padding: 20px;
  border-radius: 15px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContent = styled.div`
  margin-top: 15px;
`;

export const FecharBtn = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const BotaoFinalizar = styled.button`
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
   position: absolute;
  bottom: 1rem;
  right: 1rem;


  &:hover {
    background-color: #b0a48e;
    color: #000;
  }
`;
