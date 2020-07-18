import styled from 'styled-components'

const Select = styled.select`
  padding: 0.5em;
  margin: 0.5em;
  margin-left: 0;
  height:30px;
  color: ${props => props.theme.primary};
  background: white;
  border: none;
  border-radius:10px;
  outline: none;

`;

export default Select