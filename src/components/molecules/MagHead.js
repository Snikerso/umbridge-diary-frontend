import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Stick } from 'assets/stick.svg';


const StyledWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:30px;
>:nth-child(2){
    margin-left:20px;
}

`
const Head = styled.h1`
    color: ${props => props.theme.primary};
    font-size:50px;
`


const MagHead = () => {


    return (
        <>
            <StyledWrapper>
                <Head >Mags</Head >
                <Stick width={60} />
            </StyledWrapper>

        </>

    )
}

export default MagHead