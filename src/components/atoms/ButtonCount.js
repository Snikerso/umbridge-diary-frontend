
import styled, { css } from 'styled-components'

const ButtonCount = styled.button`
  width: 25px;
  height:25px;
  cursor:pointer;
  color:  ${props => props.theme.secondary};
  background-color:  ${props => props.theme.primary};
  border: none;
  border-radius: 50%;
  transition:0.3s;
  outline:none;

  :hover{
    color: ${props => props.theme.primary};
    background-color:  ${props => props.theme.secondary};
  }

  ${({ present }) => present && css`
    position:relative;
    width: 30px;
    height:30px;
    background-color:  ${props => props.theme.green};
    border: 3px solid ${props => props.theme.green};
    :hover{
      background-color:  ${props => props.theme.primary};
    }
  `}



  ${({ unpresent }) => unpresent && css`
    position:relative;
    width: 30px;
    height:30px;
    border: 3px solid ${props => props.theme.grey};
    background-color:  white;
  :hover{
      background-color:  ${props => props.theme.green};
    }
  `}
`;

export default ButtonCount