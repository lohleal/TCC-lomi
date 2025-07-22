// src/components/LayoutTotem/style.js
import styled from 'styled-components';
//import fundo from '../../image/imgFundo.jpg';
import grao from '../../image/grao.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFE9D7;
  padding: 1rem;
  border-radius: 30px;
  text-align: center;
  position: relative;
  min-width: 800px;
  min-height: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  align-items: center;
`;

export const Titulo = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 40px;
  color: #5b2c06;
  padding: 2px;
 margin-bottom: 15px; 
`;


export const Linha = styled.div`
  width: 100%;
  height: 20px;
  background-image: repeating-radial-gradient(
    circle,
    #2f4225 0px,
    #2f4225 4px,
    transparent 4px,
    transparent 20px
    );
  background-position: 0px -6px;
  background-size: 30px 20px;
`;


export const GraoCafe = styled.img`
  background-image: url(${grao});
  background-size: contain;
  background-repeat: no-repeat;
  width: 70px;
  height: 70px;
  position: absolute;

&.right {
  bottom: 5px;
  right: -35px;
  transform: scaleX(1); /* Espelha para encaixar no novo lado */
}

&.topRight {
  top: 360px;
  right: -45px;
  transform: rotate(100deg); /* Ajusta conforme o novo lado */
}

&.left {
  top: -25px;
  left: -35px;
  transform: scaleX(-1); /* Ou remova, se quiser o lado natural */
  transform: rotate(360deg); /* Ou scaleX(1), dependendo do efeito */
  width: 90px;
  height: 90px;
}

&.bottomLeft {
  bottom: 370px;
  left: -40px;
  transform: rotate(100deg); /* Ou scaleX(1), dependendo do efeito */
 
}


`;