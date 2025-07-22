// src/pages/LoginCliente.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import Background from '../../components/Background';
import Voltar from '../../components/BotaoVoltar';
import LinkNone from '../../components/LinkNone';
import { Botao } from './style';

function MenuPrincipal() {

    return (
        <Background>

            <LayoutTotem titulo="Menu Principal">
                <Botao>
                    <LinkNone to="/cadastrar-produto">Atender Pedidos</LinkNone>
                </Botao>

                <Botao>
                    <LinkNone to="/cadastrar-produto">Cadastrar Produtos</LinkNone>
                </Botao>
    
                <Botao>
                    <LinkNone to="/cadastrar-produto">Ver Produtos</LinkNone>
                </Botao>
            </LayoutTotem>

            <Voltar>
                <LinkNone to="/">Voltar</LinkNone>
            </Voltar>
        </Background>
    );
}

export default MenuPrincipal;
