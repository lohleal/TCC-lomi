// src/pages/CardapioCafeG.js
import React from 'react';


import { Sidebar, Logo, Menu, MenuItem, BotaoVoltar } from '../../components/MenuLateral/style';
import { Card, Imagem, Detalhes, Nome, Preco, BotaoCarrinho, Titulo, GridProdutos } from '../../components/CardProdutos/style';
import Background from '../../components/Background';

import { useLocation } from 'react-router-dom';


export default function CardapioCafeG() {
    
    const produtos = [
        {
            nome: 'Frape',
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
                    <MenuItem>CAFÉ QUENTE</MenuItem>
                    <MenuItem className="ativo" >CAFÉ GELADO</MenuItem>
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

