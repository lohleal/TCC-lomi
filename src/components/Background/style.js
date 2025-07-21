import styled from 'styled-components';
import fundo from '../../image/imgFundo.jpg';

export const ImgFundo = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;