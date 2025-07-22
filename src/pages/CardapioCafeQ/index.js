// src/pages/CardapioCafeQ.js

import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { Sidebar, Logo, Menu, MenuItem } from '../../components/MenuLateral/style';
import { Card, Imagem, Detalhes, Nome, Preco, BotaoCarrinho, Titulo, GridProdutos } from '../../components/CardProdutos/style';
import BotaoVoltar from '../../components/VoltarCliente';
import Background from '../../components/Background';
import LinkNone from '../../components/LinkNone';
import CarrinhoTotem from '../../components/CarrinhoTotem';
import BotaoVoltarCliente from '../../components/VoltarCliente';

export default function CardapioCafeQ() {

    const produtos = [
        {
            nome: 'Cappuccino',
            tamanho: '200mL',
            preco: 'R$ 15,99',
        },
        {
            nome: 'Espresso',
            tamanho: '100mL',
            preco: 'R$ 10,00',
        },
        {
            nome: 'Mocha',
            tamanho: '200mL',
            preco: 'R$ 18,50',
        },
        {
            nome: 'Latte',
            tamanho: '250mL',
            preco: 'R$ 16,00',
        },
        {
            nome: 'Abelhinha',
            tamanho: '200mL',
            preco: 'R$ 20,00',
        },
        {
            nome: 'Latte',
            tamanho: '250mL',
            preco: 'R$ 16,00',
        }
    ];

    const location = useLocation();
    const nomeCliente = location.state?.nome || 'Cliente';

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <Sidebar>
                <Logo />
                <Menu>
                    <MenuItem className="ativo" >CAFÉ QUENTE</MenuItem>

                    <LinkNone to="/cardapio-cafeG"><MenuItem>CAFÉ GELADO</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-bebidas"><MenuItem>BEBIDAS</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-salgados"><MenuItem>SALGADOS</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-doces"><MenuItem>DOCES</MenuItem></LinkNone>

                    <BotaoVoltarCliente/ >

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

