import React, { useState, useEffect } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import Background from '../../components/Background';
import { TabelaFofa, Icone } from '../../components/TabelaList/style';
import LinkNone from '../../components/LinkNone';
import Voltar from '../../components/BotaoVoltar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function VerProduto() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/products");
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/products/${id}`);
            // Remove o produto do estado para atualizar a tabela
            setProdutos(produtos.filter(produto => produto.id !== id));
            //alert("Produto excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };


    return (
        <Background>
            <LayoutTotem titulo="Produtos">
                <TabelaFofa>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Tamanho</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>R$ {produto.valor}</td>
                                <td>{produto.tamanho}</td>
                                <td>{produto.categoria}</td>
                                <td>
                                    <LinkNone to={`/editar-produto/${produto.id}`}>
                                        <Icone className="material-symbols-outlined">edit</Icone>
                                    </LinkNone>

                                    <button
                                        onClick={() => deleteProduct(produto.id)}
                                        style={{
                                            background: "transparent",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: 0,
                                        }}
                                    >
                                        <Icone className="material-symbols-outlined">delete</Icone>
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TabelaFofa>
            </LayoutTotem>
            <Voltar>
                <LinkNone to="/menu principal">Voltar</LinkNone>
            </Voltar>
        </Background>
    );
}

export default VerProduto;
