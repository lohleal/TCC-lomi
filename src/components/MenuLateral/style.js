// src/components/MenuLateral.js
import styled from 'styled-components';
import logo from '../../image/logo.png';
import xicara from '../../image/xicara.png';

export const Sidebar = styled.div`
  width: 350px; /* aumentei de 220px para 280px */
  background-color: #f9e8d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 200px;  /* aumentei de 140px para 180px */
  height: 200px; /* aumentei de 140px para 180px */
  border-radius: 50%;
  margin-bottom: 20px;
`;


export const Menu = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
`;

export const MenuItem = styled.li`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 1.3rem; /* aumentei de 1.1rem para 1.3rem */
  color: #754c24;
  background-color: #d5c4b1;
  padding: 16px 27px; /* um pouco mais de espaço */
  cursor: pointer;
  text-align: center;
  margin-bottom: 5px;
  border-radius: 5%;

  &.ativo {
    background-color: #87987d;
    color: #f9e8d9;
    font-weight: bold;
  }

  &:not(.ativo):hover {
    background-color: #d5c4b1;
  }
`;


