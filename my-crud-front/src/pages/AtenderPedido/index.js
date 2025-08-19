import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import Background from '../../components/Background';
import { TabelaFofa, Icone } from '../../components/TabelaList/style';
import CartModal from '../../components/CartModal';
import LinkNone from '../../components/LinkNone';
import Voltar from '../../components/BotaoVoltar';

function AtenderPedido() {
    const [modalAberto, setModalAberto] = useState(false);

    const itensFixos = [
        { quantidade: 1, produto: 'Café Expresso', tamanho: '100mL', preco: 'R$ 10,00' },
        { quantidade: 2, produto: 'Brownie de Chocolate', tamanho: 'Unidade', preco: 'R$ 10,00' },
    ];

    return (
        <Background>
            <LayoutTotem titulo="Pedidos Pendentes">
                <TabelaFofa>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Horário</th>
                            <th>Atender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gil Eduardo</td>
                            <td>13:47</td>
                            <td>
                                <a as="button" onClick={() => setModalAberto(true)}>
                                    <Icone className="material-symbols-outlined">list_alt_check</Icone>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kamilly</td>
                            <td>13:49</td>
                            <td>
                                <a as="button" onClick={() => setModalAberto(true)}>
                                    <Icone className="material-symbols-outlined">list_alt_check</Icone>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Heloisa</td>
                            <td>13:55</td>
                            <td>
                                <a as="button" onClick={() => setModalAberto(true)}>
                                    <Icone className="material-symbols-outlined">list_alt_check</Icone>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </TabelaFofa>
            </LayoutTotem>

            <Voltar>
                <LinkNone to="/menu principal">Voltar</LinkNone>
            </Voltar>

            {modalAberto && (
                <CartModal
                    aberto={modalAberto}
                    onFechar={() => setModalAberto(false)}
                    titulo="Pedido do Cliente"
                    textoBotao="Finalizar"
                    linkBotao="/atender-pedido"
                >
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {itensFixos.map((item, i) => (
                            <li key={i}>
                                {item.quantidade} - {item.produto} - {item.tamanho} - {item.preco}
                            </li>
                        ))}
                    </ul>
                </CartModal>
            )}

        </Background>
    );
}

export default AtenderPedido;
