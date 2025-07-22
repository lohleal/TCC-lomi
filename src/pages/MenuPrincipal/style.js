import styled from "styled-components";

export const Botao = styled.button`
  font-size: 20px;
  padding: 1rem 3rem; /* pode ajustar se quiser */
  background-color: #c4bba6;
  border: 2px solid #5a5a49;
  border-radius: 20px;
  color: #3d3d3d;
//   font-weight: bold;
  width: 300px;       /* largura fixa */
  height: 70px;       /* altura fixa */
  margin-top: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  display: flex;      /* para alinhar texto no centro */
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #b0a48e;
    color: #000;
  }
`;
