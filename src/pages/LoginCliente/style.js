import styled from 'styled-components';


export const Conteudo = styled.div`
  font-family: 'Georgia', serif;
  font-size: 40px;
  color: #5b2c06;
  margin-top: 90px;
  margin-bottom: 15px;
`;

export const BotaoXicara = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;
  padding: 0.5rem 2rem;
  background-color: #c4bba6;
  border: 2px solid #5a5a49;
  border-radius: 20px;
  color: #3d3d3d;
  font-weight: bold;
  margin-top: 110px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #b0a48e;
    color: #000;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const XicaraIcon = styled.span`
  position: absolute;
  color: #5a5a49;
  font-size: 20px;
  left: 10px;

`;

export const CheckIconOverlay = styled.span`
  position: absolute;
  left: 14.5px;
  top: -3px; 
  color: white;

  svg {
    font-size: 8px !important;
    width: 8px;
    height: 8px;
  }
`;