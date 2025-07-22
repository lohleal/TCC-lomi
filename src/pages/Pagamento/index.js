import React from "react";

import Background from "../../components/Background";
import { PedidoContainer, ListaItens, Titulo, Item, Total, Botoes, Botao, QRCodeContainer } from "./style";
import Voltar from "../../components/BotaoVoltar";
import LinkNone from "../../components/LinkNone";

export default function Pagamento() {

    const itens = [
        { nome: "Café Mocca", preco: 7.99 },
        { nome: "Cookie", preco: 3.99 },
    ];

    // Soma dos preços
    const total = itens.reduce((acc, item) => acc + item.preco, 0).toFixed(2);

    return (
        <Background>
            <PedidoContainer>
                <Titulo>Seu Pedido</Titulo>

                <ListaItens>
                    {itens.map((item, index) => (
                        <Item key={index}>
                            <span>{item.nome}</span>
                            <span>{item.preco.toFixed(2).replace(".", ",")}</span>
                        </Item>
                    ))}
                </ListaItens>

                <Total>
                    <span>TOTAL</span>
                    <span>{total.replace(".", ",")}</span>
                </Total>
                <QRCodeContainer>
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=Pagamento"
                        alt="QR Code"
                    />
                </QRCodeContainer>
            </PedidoContainer>

            <Voltar>
                <LinkNone to="/cardapio-cafeQ">Voltar</LinkNone>
            </Voltar>

            <Botao onClick={() => console.log('log clicado')}>
                <a href="/cliente" style={{ textDecoration: 'none', color: 'inherit' }}>Finalizar</a>
            </Botao>

        </Background>
    );
}




