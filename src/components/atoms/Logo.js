import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as Diary } from 'assets/iconfinder_copybook.svg';

const StyledWrapper = styled.div`
    width:400px;
    display:grid;
    grid-template-columns:20% 1fr;
    justify-content:center;
    align-items:center;
    position:absolute;
    left: 60px;
    font-size:25px;

    .a{
        fill:${props => props.theme.secondary};
        
    
    }
    ${({ logout }) => logout && css`
      
        left:50%;
        transform:translate(-50%,0%);
`}

`
const Head = styled.h2`
    color:${props => props.theme.secondary};

`


const Logo = ({ logout }) => {

    return (
        <>
            {logout === "logout" ? (
                <StyledWrapper logout>
                    <NavLink style={{ textDecoration: 'none' }} exact to='/' activeClassName='active'>
                        <Diary />
                    </NavLink>
                    <Head>Mrs. Umbridge's Diary</Head>
                </StyledWrapper>
            ) : (
                    <StyledWrapper >
                        <NavLink style={{ textDecoration: 'none' }} exact to='/' activeClassName='active'>
                            <Diary />
                        </NavLink>
                        <Head >Mrs. Umbridge's Diary</Head>
                    </StyledWrapper>
                )}

        </>
    )
}


export default Logo