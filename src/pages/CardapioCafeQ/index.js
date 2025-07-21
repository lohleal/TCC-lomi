// src/pages/CardapioCafeQ.js
import React from 'react';


import { Sidebar, Logo, Menu, MenuItem, BotaoVoltar } from '../../components/MenuLateral/style';
import { Card, Imagem, Detalhes, Nome, Preco, BotaoCarrinho, Titulo, GridProdutos } from '../../components/CardProdutos/style';
import Background from '../../components/Background';

import { useLocation } from 'react-router-dom';


export default function CardapioCafeQ() {
    // lista de produtos só para exemplo
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
                    <MenuItem className="ativo">CAFÉ QUENTE</MenuItem>
                    <MenuItem>CAFÉ GELADO</MenuItem>
                    <MenuItem>BEBIDAS</MenuItem>
                    <MenuItem>SALGADOS</MenuItem>
                    <MenuItem>DOCES</MenuItem>
                    <BotaoVoltar>Voltar</BotaoVoltar>
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

