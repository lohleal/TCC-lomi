// src/pages/CardapioCafeG.js
import React from 'react';


import { Sidebar, Logo, Menu, MenuItem } from '../../components/MenuLateral/style';
import { Card, Imagem, Detalhes, Nome, Preco, BotaoCarrinho, Titulo, GridProdutos } from '../../components/CardProdutos/style';
import Background from '../../components/Background';
import Voltar from '../../components/BotaoVoltar';
import CarrinhoTotem from '../../components/CarrinhoTotem';
import BotaoVoltarCliente from '../../components/VoltarCliente';

import { useLocation } from 'react-router-dom';

import LinkNone from '../../components/LinkNone';


export default function CardapioCafeG() {

    const produtos = [
        {
            nome: 'Iced Coffee Tradicional',
            tamanho: '300mL',
            preco: 'R$ 10,00',
        },
        {
            nome: 'Latte Gelado',
            tamanho: '350mL',
            preco: 'R$ 12,00',
        },
        {
            nome: 'Mocha Gelado',
            tamanho: '400mL',
            preco: 'R$ 14,00',
        },
        {
            nome: 'Caramel Macchiato Gelado',
            tamanho: '350mL',
            preco: 'R$ 15,00',
        },
        {
            nome: 'Cold Brew',
            tamanho: '300mL',
            preco: 'R$ 13,00',
        },
        {
            nome: 'Vanilla Sweet Cream Cold Brew',
            tamanho: '300mL',
            preco: 'R$ 13,00',
        },
        {
            nome: 'Affogato',
            tamanho: '200mL',
            preco: 'R$ 17,00',
        },
        {
            nome: 'Frappé de Baunilha',
            tamanho: '350mL',
            preco: 'R$ 18,50',
        },
        {
            nome: 'Irish Coffee Gelado',
            tamanho: '300mL',
            preco: 'R$ 20,00',
        },
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

                    <BotaoVoltarCliente />

                </Menu>
            </Sidebar>
            <Background>

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


                <CarrinhoTotem />
            </Background>
        </div>
    );
}