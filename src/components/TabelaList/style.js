import styled from "styled-components";

export const TabelaFofa = styled.table`
  width: 90%;
  margin: 20px auto;
  border-collapse: collapse;
  background-color: #fff5e1;
  border-radius: 20px;
  overflow: hidden;
  font-family: 'Georgia', serif;

  th, td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    color: #5b2c06;
  }

  th {
    background-color: #c4bba6;
    color: #3d3d3d;
    font-weight: bold;
    font-size: 1rem;
  }

  td {
    font-size: 0.95rem;
  }
`;

export const Icone = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 22px;
  margin: 0 8px;
  cursor: pointer;
  color: #5a5a49;

  &:hover {
    color: #000;
  }
`;
