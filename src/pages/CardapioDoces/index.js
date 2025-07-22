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


export default function CardapioDoces() {

    const produtos = [
        {
            nome: 'Brownie de Chocolate',
            tamanho: 'Unidade',
            preco: 'R$ 10,00',
        },
        {
            nome: 'Cheesecake de Frutas Vermelhas',
            tamanho: 'Fatia',
            preco: 'R$ 14,00',
        },
        {
            nome: 'Torta de Limão',
            tamanho: 'Fatia',
            preco: 'R$ 12,00',
        },
        {
            nome: 'Cookies de Gotas de Chocolate',
            tamanho: 'Unidade',
            preco: 'R$ 6,00',
        },
        {
            nome: 'Muffin de Blueberry',
            tamanho: 'Unidade',
            preco: 'R$ 9,00',
        },
        {
            nome: 'Pudim de Leite',
            tamanho: 'Fatia',
            preco: 'R$ 11,00',
        },
        {
            nome: 'Bolo de Cenoura com Chocolate',
            tamanho: 'Fatia',
            preco: 'R$ 10,00',
        },
    
        {
            nome: 'Pavê de Chocolate',
            tamanho: 'Fatia',
            preco: 'R$ 13,00',
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
                    <LinkNone to="/cardapio-cafeG"><MenuItem>CAFÉ GELADO</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-bebidas"><MenuItem>BEBIDAS</MenuItem></LinkNone>
                    <LinkNone to="/cardapio-salgados"><MenuItem>SALGADOS</MenuItem></LinkNone>
                    <MenuItem className="ativo" >DOCES</MenuItem>
                    
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

