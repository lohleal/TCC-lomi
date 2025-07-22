// src/pages/AtenderPedido/index.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { InputStyled } from '../../components/InputTotem/style';
import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import { ContainerBotoes, Botao } from './style';
import LinkNone from '../../components/LinkNone';
import Voltar from '../../components/BotaoVoltar';
import { TabelaFofa, Icone } from '../../components/TabelaList/style';
import CartModal from '../../components/CartModal';


function AtenderPedido() {

    return (
        <Background>

            <LayoutTotem titulo="Pedidos Pendentes">


                <TabelaFofa>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Horário</th>
                            <th>Atender</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td>1</td>
                            <td>Gil Eduardo</td>
                            <td>13:47</td>
                            <td>
                                <LinkNone to="/editar-produto">
                                    <Icone className="material-symbols-outlined">list_alt_check</Icone>
                                </LinkNone>
                            
                            </td>
                        </tr>

                    </tbody>
                </TabelaFofa>

            </LayoutTotem>
            <Voltar>
                <LinkNone to="/menu principal">Voltar</LinkNone>
            </Voltar>

        </Background>
    );
}

export default AtenderPedido;
