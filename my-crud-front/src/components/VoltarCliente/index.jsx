// src/components/BotaoVoltarCliente.js
import React from 'react';
import LinkNone from '../LinkNone'; 
import { BotaoVoltarCliente } from './style';

export default function VoltarCliente(Children) {
  return (
    <BotaoVoltarCliente>
      <LinkNone to="/cliente"><span className="material-symbols-outlined">keyboard_double_arrow_left</span>Voltar</LinkNone>
    </BotaoVoltarCliente>
  );
}

