// src/pages/LoginFuncionario/index.js
import React, { useState } from 'react';
import LayoutTotem from '../../components/LayoutTotem';
import { InputStyled } from '../../components/InputTotem/style';
import { Botao } from './style';
import { Link } from 'react-router-dom';
import { Conteudo } from './style';
import  Background from '../../components/Background';


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

        <Botao onClick={() => console.log('Confirmar clicado')}>
          <a href="/menu principal">Confirmar</a>
        </Botao>

        <Link to="/cliente">Área do Cliente</Link>


      </LayoutTotem>
    </Background>
  );
}

export default LoginFuncionario;
