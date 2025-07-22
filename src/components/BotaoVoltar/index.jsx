import React from 'react';
import { BotaoVoltar } from './style';
import LinkNone from '../LinkNone';

function Voltar({ children }) {
    return (
        <BotaoVoltar >
            <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
            {children}
        </BotaoVoltar>
    );
}

export default Voltar;
