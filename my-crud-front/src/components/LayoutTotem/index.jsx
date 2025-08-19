import React from 'react';
import {
  Container,
  Titulo,
  Linha,
  GraoCafe,

} from './style';

import grao from '../../image/grao.png';

function LayoutTotem({ titulo, children }) {
  return (
    <Container>
      {/* Grãos invertidos */}
      <GraoCafe src={grao} alt="Grão direito agora na esquerda" className="right" />
      <GraoCafe src={grao} alt="Grão inferior direito agora na esquerda" className="topRight" />

      <Titulo>{titulo}</Titulo>
      <Linha />

      {children}

      <GraoCafe src={grao} alt="Grão esquerdo agora na direita" className="left" />
      <GraoCafe src={grao} alt="Grão inferior esquerdo agora na direita" className="bottomLeft" />
    </Container>
  );
}


export default LayoutTotem;