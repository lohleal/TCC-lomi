// src/pages/LoginCliente.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import InputTotem from '../../components/InputTotem';
import { Conteudo } from './style';
import { BotaoXicara } from './style';
import Background from '../../components/Background';
import Voltar from '../../components/BotaoVoltar';
import LinkNone from '../../components/LinkNone';

import { useNavigate } from 'react-router-dom';


function LoginCliente() {
    const [nome, setNome] = useState('');
    const confirmarLogin = () => {
        navigate('/cardapio-cafeQ', { state: { nome } });
    };
    const navigate = useNavigate();

    return (
        <Background>

            <LayoutTotem titulo="Bem Vindo!!">
                <Conteudo>Digite seu nome/apelido:</Conteudo>
                <InputTotem
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <BotaoXicara>
                    <button onClick={confirmarLogin}>Confirmar</button>
                </BotaoXicara>
            </LayoutTotem>

            <Voltar>
                <LinkNone to="/">Voltar</LinkNone>
            </Voltar>
        </Background>
    );
}

export default LoginCliente;
