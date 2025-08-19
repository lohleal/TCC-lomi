// src/pages/LoginFuncionario/index.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { InputStyled } from '../../components/InputTotem/style';
import { Botao } from './style';
import { Link } from 'react-router-dom';
import { Conteudo, ContainerBotoes } from './style';
import Background from '../../components/Background';


function LoginFuncionario() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Background>

      <LayoutTotem titulo="Entrar">

        <Conteudo>Usuário</Conteudo>
        <InputStyled
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />

        <Conteudo>Senha</Conteudo>
        <InputStyled
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />

        <ContainerBotoes>

          <Botao onClick={() => console.log('Confirmar clicado')}>
            <a href="/menu principal" style={{ textDecoration: 'none', color: 'inherit' }}>Confirmar</a>
          </Botao>

          <Botao onClick={() => console.log('Cadastrar')}>
            <a href="/cadastrar-funcionario" style={{ textDecoration: 'none', color: 'inherit' }}>Cadastrar</a>
          </Botao>

          <Botao onClick={() => console.log('Confirmar clicado')}>
            <a href="/cliente" style={{ textDecoration: 'none', color: 'inherit' }}>Área do Cliente</a>
          </Botao>
        </ContainerBotoes>


      </LayoutTotem>
    </Background>
  );
}

export default LoginFuncionario;
