import styled from 'styled-components';

const Input = styled.input`

  width: 277px;
  height: 50px;
  color: ${props => props.theme.primary};
  padding-left:20px;
  background: transparent;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 14px;
  box-shadow: 0px 4px 6px #00000029;
  outline: none;

`;

export default Input;