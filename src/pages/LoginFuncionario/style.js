// src/pages/LoginFuncionario/style.js
import styled from 'styled-components';
import fundo from '../../image/telaFundo.jpg';

export const Background = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-image: url('${fundo}');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Titulo = styled.h1`
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: #333;
  font-family: 'Courier New', Courier, monospace;
`;

