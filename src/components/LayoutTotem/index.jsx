import React from 'react';
import {
  Background,
  Container,
  Titulo,
  Linha,
  GraoCafe,
 
} from './style';

import grao from '../../image/grao.jpg';

function LayoutTotem({ titulo, children }) {
  return (
    <Background>
      <Container>
        <GraoCafe src={grao} alt="Grão esquerdo" className="left" />
        <Titulo>{titulo}</Titulo>
        <Linha />
        
        {children}
        <GraoCafe src={grao} alt="Grão direito" className="right" />
      </Container>
    </Background>
  );
}

export default LayoutTotem;
