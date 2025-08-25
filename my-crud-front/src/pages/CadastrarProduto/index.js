// src/pages/CadastrarProduto/index.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { Link } from 'react-router-dom';
import { Conteudo, ContainerBotoes, InputTotem, Botao, SelectTotem } from './style';
import Background from '../../components/Background';

import axios from "axios";

function CadastrarProduto() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [categoria, setCategoria] = useState('');

    const createProduct = async () => {
        try {
            await axios.post("http://localhost:3000/api/products", {
                nome,
                valor,
                tamanho,
                categoria,
            });
            //alert("Produto cadastrado com sucesso!");
            // Limpa os campos
            setNome("");
            setValor("");
            setTamanho("");
            setCategoria("");
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error);

        }
    };

    return (
        <Background>

            <LayoutTotem titulo="Novo Produto">

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
                        <Link to="/menu principal" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Voltar
                        </Link>
                    </Botao>


                    <Botao onClick={createProduct}>
                        <Link to="/menu principal" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Confirmar
                        </Link>
                    </Botao>

                </ContainerBotoes>

            </LayoutTotem>
        </Background >
    );
}

export default CadastrarProduto;
