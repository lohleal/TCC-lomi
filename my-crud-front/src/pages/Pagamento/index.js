import React from "react";

import Background from "../../components/Background";
import { Ticket, ListaItens, Titulo, Item, Total, Botoes, Botao, QRCodeContainer, PedidoContainer, ContainerItens } from "./style";
import Voltar from "../../components/BotaoVoltar";
import LinkNone from "../../components/LinkNone";
import { GraoCafe } from "./style";
import grao from '../../image/grao.png';

export default function Pagamento() {

    const itens = [
        { nome: "Café Expresso", preco: 5.99 },
        { nome: "Cappuccino", preco: 7.99 },
        { nome: "Latte", preco: 8.99 },
    ];

    const total = itens.reduce((acc, item) => acc + item.preco, 0).toFixed(2);

    return (
        <Background>
            <Ticket>
                <PedidoContainer>
                    <GraoCafe src={grao} alt="Grão direito agora na esquerda" className="right" />
                    <GraoCafe src={grao} alt="Grão inferior direito agora na esquerda" className="topRight" />
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

                    <GraoCafe src={grao} alt="Grão esquerdo agora na direita" className="left" />
                    <GraoCafe src={grao} alt="Grão inferior esquerdo agora na direita" className="bottomLeft" />
                </PedidoContainer>

                <Voltar>
                    <LinkNone to="/cardapio-cafeQ">Voltar</LinkNone>
                </Voltar>

                <Botao onClick={() => console.log('log clicado')}>
                    <a href="/cliente" style={{ textDecoration: 'none', color: 'inherit' }}>Finalizar</a>
                </Botao>
            </Ticket>
        </Background>
    );
}




