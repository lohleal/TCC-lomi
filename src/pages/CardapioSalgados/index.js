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


export default function CardapioSalgados() {

    const produtos = [
        {
            nome: 'Coxinha c/ Catupiry',
            tamanho: '100g',
            preco: 'R$ 8,99'
        },
        {
            nome: 'Coxinha de Frango',
            tamanho: 'Unidade',
            preco: 'R$ 7,00',
        },
        {
            nome: 'Empada de Frango',
            tamanho: 'Unidade',
            preco: 'R$ 7,50',
        },
        {
            nome: 'Pão de Queijo',
            tamanho: 'Unidade',
            preco: 'R$ 5,00',
        },   
        {
            nome: 'Tortinha de Palmito',
            tamanho: 'Unidade',
            preco: 'R$ 9,00',

        },
        {
            nome: 'Croissant de Presunto e Queijo',
            tamanho: 'Unidade',
            preco: 'R$ 12,00',
        },
        {
            nome: 'Quiche de Queijo e Bacon',
            tamanho: 'Unidade',
            preco: 'R$ 15,00',
        },
        {
            nome: 'Wrap de Frango com Cream Cheese',
            tamanho: 'Unidade',
            preco: 'R$ 18,00',
        },
        
        {
            nome: 'Torrada com Avocado e Ovo Pochê',
            tamanho: 'Unidade',
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

                    <LinkNone to="/cardapio-cafeG"><MenuItem>CAFÉ GELADO</MenuItem></LinkNone>

                    <LinkNone to="/cardapio-bebidas"><MenuItem>BEBIDAS</MenuItem></LinkNone>
                    <MenuItem className="ativo" >SALGADOS</MenuItem>
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

