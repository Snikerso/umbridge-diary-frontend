import React, { useContext } from 'react';
import styled, {css} from 'styled-components';
import authContext from 'contexts/authContext';
import themeContext from 'contexts/themeContext';
import NavItem from 'components/atoms/NavItem'


const StyledWrapper = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    align-content:space-around;
    justify-content:space-around;
    padding:20px;
    background: ${props => props.theme.secondary};
    color:${props => props.theme.primary};
    width:200px;
    height:130px;
    right:20px;
    margin-top:10px;
    border-radius: 18px 0 18px 18px;
    font-family:Roboto;
    font-weight:bold;
    font-size:15px;
    > div {
        margin-top:5px;
    }
    >:nth-child(3){
        color:#004777;
        text-decoration:underline;
    }


`

const ToogleSwitch = styled.div`
  display:flex;
  justify-content:space-between;
  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 18px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 0px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: ${props => props.theme.primary};
  }


  input:checked + .slider:before {
    transform: translateX(12px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

const StyledLogout = styled.div`
  :hover{
    color: ${props => props.theme.primary};
  }
`


const ProfileMenu = () => {

  const context = useContext(authContext)
  const theme = useContext(themeContext)


  return (
    <>
      <StyledWrapper>
      <NavItem  icon='profilemenu' />
        <ToogleSwitch>
          <div>Slytherin mode</div>
          <label className="switch">
            <input onChange={theme.themeToggler} type="checkbox" checked={theme.themes == "slytherin" ? true : false} />
            <span className="slider round"></span>
          </label>
        </ToogleSwitch>
        <StyledLogout onClick={() => context.dispatchAuth({ type: 'LOGOUT', token: '' })}>Log out</StyledLogout>
      </StyledWrapper>

    </>

  )
}

export default ProfileMenu