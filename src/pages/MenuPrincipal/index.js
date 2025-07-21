// src/pages/LoginCliente.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import Background from '../../components/Background';
import Voltar from '../../components/BotaoVoltar';

function MenuPrincipal() {

    return (
        <Background>

            <LayoutTotem titulo="Menu Principal">
                
            </LayoutTotem>

            <Voltar>
                <a href="/">Voltar</a>
            </Voltar>
        </Background>
    );
}

export default MenuPrincipal;
