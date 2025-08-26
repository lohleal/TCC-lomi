// src/pages/EditarProduto/index.js
import React, { useState, useEffect } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { Conteudo, ContainerBotoes, InputTotem, Botao, SelectTotem } from './style';
import Background from '../../components/Background';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

function EditarProduto() {
    const { id } = useParams();

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tamanho, setTamanho] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/${id}`);
                const produto = response.data;
                setNome(produto.nome);
                setValor(produto.valor);
                setTamanho(produto.tamanho);
                setCategoria(produto.categoria);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const updateProduct = async () => {
        try {
            await axios.put(`http://localhost:3000/api/products/${id}`, {
                nome,
                valor,
                tamanho,
                categoria,
            });
            //alert("Produto alterado com sucesso!");
        } catch (error) {
            console.error("Erro ao alterar produto:", error);

        }
    };

    return (
        <Background>

            <LayoutTotem titulo="Editar Produto">


                <InputTotem
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome"
                />

                <InputTotem
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                    placeholder="Valor"
                />

                <InputTotem
                    value={tamanho}
                    onChange={e => setTamanho(e.target.value)}
                    placeholder="Tamanho"
                />

                <SelectTotem value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="" disabled hidden>Categoria</option>
                    <option value="Café Quente">Café Quente</option>
                    <option value="Café Gelado">Café Gelado</option>
                    <option value="Doces">Doces</option>
                    <option value="Salgados">Salgados</option>
                    <option value="Bebidas">Bebidas</option>
                </SelectTotem>

                <ContainerBotoes>

                    <Botao>
                        <Link to="/ver-produto" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Voltar
                        </Link>
                    </Botao>

                    <Botao onClick={updateProduct}>
                        <Link to="/ver-produto" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Confirmar
                        </Link>
                    </Botao>

                </ContainerBotoes>

            </LayoutTotem>
        </Background>
    );
}

export default EditarProduto;
