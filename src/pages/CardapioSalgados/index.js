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
            nome: 'Coxinha c/ Catupiry',
            tamanho: '100g',
            preco: 'R$ 8,99',
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
                    <MenuItem className="ativo" >SALGADOS</MenuItem>
                    <LinkNone to="/cardapio-doces"><MenuItem>DOCES</MenuItem></LinkNone>
                    
                    <BotaoVoltarCliente/ >

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
                
                <CarrinhoTotem />
            </Background>
        </div>
    );
}

