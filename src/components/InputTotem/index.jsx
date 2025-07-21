import React from 'react';
import { InputStyled } from './style';

function InputTotem({ value, onChange, placeholder, type = "text" }) {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default InputTotem;
