import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  width: 153px;
  height: 43px;
  font-family:Roboto;
  font-weight:bold;
  font-size:17px;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
  border: none;
  outline: none;
  max-height: 40px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 22px;
  :hover{
    background-color: ${props => props.theme.tertitary};
  }
`;


export default Button