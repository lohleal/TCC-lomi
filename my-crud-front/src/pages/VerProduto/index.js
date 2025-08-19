// src/pages/VerProduto/index.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { InputStyled } from '../../components/InputTotem/style';
import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import { Conteudo, ContainerBotoes, Botao} from './style';
import LinkNone from '../../components/LinkNone';
import Voltar from '../../components/BotaoVoltar';
import { TabelaFofa, Icone } from '../../components/TabelaList/style';


function VerProduto() {

    return (
        <Background>

            <LayoutTotem titulo="Produtos">


                <TabelaFofa>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Tamanho</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Café Expresso</td>
                            <td>R$ 10,00</td>
                            <td>100mL</td>
                            <td>Café Quente</td>
                            <td>
                                <LinkNone to="/editar-produto">
                                    <Icone className="material-symbols-outlined">edit</Icone>
                                </LinkNone>
                                <Icone className="material-symbols-outlined">delete</Icone>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Capuccino</td>
                            <td>R$ 15,99</td>
                            <td>150mL</td>
                            <td>Café Quente</td>
                            <td>

                                <LinkNone to="/editar-produto">
                                    <Icone className="material-symbols-outlined">edit</Icone>
                                </LinkNone>
                                <Icone className="material-symbols-outlined">delete</Icone>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Torta de Limão</td>
                            <td>R$ 12,00</td>
                            <td>Fatia</td>
                            <td>Doces</td>
                            <td>
                                <LinkNone to="/editar-produto">
                                    <Icone className="material-symbols-outlined">edit</Icone>
                                </LinkNone>
                                <Icone className="material-symbols-outlined">delete</Icone>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Iced Coffee Tradicional</td>
                            <td>R$ 19,99</td>
                            <td>350mL</td>
                            <td>Café Gelado</td>
                            <td>
                                <LinkNone to="/editar-produto">
                                    <Icone className="material-symbols-outlined">edit</Icone>
                                </LinkNone>
                                <Icone className="material-symbols-outlined">delete</Icone>
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

export default VerProduto;
