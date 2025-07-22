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
 
`;

export const Linha = styled.div`
  height: 20px; /* aumentei para caber o círculo maior */
  background-image: repeating-radial-gradient(
    circle,
    #2f4225 0px,
    #2f4225 8px,
    transparent 6px,
    transparent 30px
  );
  background-size: 35px 20px;
  
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