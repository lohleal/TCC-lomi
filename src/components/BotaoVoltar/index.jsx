import React from 'react';
import { BotaoVoltar } from './style';

function Voltar({ children }) {
  return (
    <BotaoVoltar >
      <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
      {children}
    </BotaoVoltar>
  );
}

export default Voltar;
