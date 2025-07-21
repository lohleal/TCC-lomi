// src/pages/CardapioCafeG.js
import React from 'react';


import { Sidebar, Logo, Menu, MenuItem } from '../../components/MenuLateral/style';
import { Card, Imagem, Detalhes, Nome, Preco, BotaoCarrinho, Titulo, GridProdutos } from '../../components/CardProdutos/style';
import Background from '../../components/Background';
import Voltar from '../../components/BotaoVoltar';

import { useLocation } from 'react-router-dom';

import LinkNone from '../../components/LinkNone';


export default function CardapioCafeG() {

    const produtos = [
        {
            nome: 'Café Frappé',
            tamanho: '200mL',
            preco: 'R$ 15,99',
        }
    ];


    const location = useLocation();
    const nomeCliente = location.state?.nome || 'Cliente';

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <Sidebar>
                <Logo />
                <Menu>
                    <LinkNone to="/cardapio-cafeQ"><MenuItem>CAFÉ QUENTE</MenuItem></LinkNone>

                    <MenuItem className="ativo" >CAFÉ GELADO</MenuItem>

                    <LinkNone to="/cardapio-bebidas"><MenuItem>BEBIDAS</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-salgados"><MenuItem>SALGADOS</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-doces"><MenuItem>DOCES</MenuItem></LinkNone>

                    <Voltar>
                        <a href="/cliente">Voltar</a>
                    </Voltar>

                </Menu>
            </Sidebar>
            <Background>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '-100px',
                }}>
                    <Titulo>Bem vindo(a), {nomeCliente}!!!</Titulo>
                    <GridProdutos>
                        {produtos.map((p, i) => (
                            <Card key={i}>
                                <Detalhes>
                                    <Nome>{p.nome} {p.tamanho}</Nome>
                                    <Preco>{p.preco}</Preco>
                                </Detalhes>
                            </Card>
                        ))}
                    </GridProdutos>
                </div>
                <BotaoCarrinho>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </BotaoCarrinho>

            </Background>
        </div>
    );
}

