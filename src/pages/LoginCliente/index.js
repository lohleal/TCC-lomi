// src/pages/LoginCliente.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import InputTotem from '../../components/InputTotem';
import { Conteudo } from './style';
import {BotaoXicara} from './style';

function LoginCliente() {
    const [nome, setNome] = useState('');

    return (
        <LayoutTotem titulo="Bem Vindo!!">
            <Conteudo>Digite seu nome/apelido:</Conteudo>
            <InputTotem
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
            />


            <BotaoXicara>
                CONFIRMAR
            </BotaoXicara>
        </LayoutTotem>
    );
}

export default LoginCliente;
