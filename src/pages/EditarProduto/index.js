// src/pages/EditarProduto/index.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { Link } from 'react-router-dom';
import { Conteudo, ContainerBotoes, InputTotem, Botao } from './style';
import Background from '../../components/Background';

function EditarProduto() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tamanho, setTamanho] = useState('');

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
                    onChange={e => setValor(e.target.value)}
                    placeholder="Tamanho"
                />

                <InputTotem
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                    placeholder="Categoria"
                />

                <ContainerBotoes>

                    <Botao onClick={() => console.log('Confirmar clicado')}>
                        <a href="/ver-produto" style={{ textDecoration: 'none', color: 'inherit' }}>Voltar</a>
                    </Botao>

                    <Botao onClick={() => console.log('Cadastrar')}>
                        <a href="/ver-produto" style={{ textDecoration: 'none', color: 'inherit' }}>Confirmar</a>
                    </Botao>

                </ContainerBotoes>

            </LayoutTotem>
        </Background>
    );
}

export default EditarProduto;
