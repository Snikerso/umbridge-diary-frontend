import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledWrapper = styled.div`

    display:grid;
    grid-template-columns:1fr;
    align-items:center;
    align-content:center;
    justify-items:center;
    text-align:center;
    font-family:Roboto;
    font-weight:bold;    
    
    a {
        text-decoration:none;
        color:white;
    }

    .active{
        color:${props => props.theme.secondary};
    }
    .active-userinfo{
        color:${props => props.theme.primary};
    }
    ${({ profilemenu }) => profilemenu && css`

        justify-items:left;

      `}


`


const Header = ({ icon }) => {

    return (
        <>
            {icon === 'dormitory' && (
                <>
                    <StyledWrapper>
                        <NavLink to='/dormitory' activeClassName='active'>
                            <h5>Dormotories</h5>
                        </NavLink>
                    </StyledWrapper>
                </>
            )}

            {
                icon === 'mags' && (
                    <>
                        <StyledWrapper>
                            <NavLink to='/mags' activeClassName='active'>
                                <h5>Mags</h5>
                            </NavLink>
                        </StyledWrapper>
                    </>
                )
            }
            {
                icon === 'profilemenu' && (
                    <>
                        <StyledWrapper profilemenu>
                            <NavLink to='/userinfo' activeClassName='active-userinfo'>
                                <h5>User Info</h5>
                            </NavLink>
                        </StyledWrapper>
                    </>
                )
            }
        </>

    )
}

export default Header