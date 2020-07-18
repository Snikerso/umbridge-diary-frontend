import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import authContext from 'contexts/authContext';
import Button from 'components/atoms/Button';
import NavItem from 'components/atoms/NavItem';
import Logo from 'components/atoms/Logo';
import ProfileMenu from 'components/molecules/ProfileMenu';
import { ReactComponent as Google } from 'assets/google.svg';

const StyledHeaderWrapper = styled.div`
    display:grid;
    position:relative;
    width:100%;
    height:100px;
    background-color: ${props => props.theme.primary};
    margin-top:0;
    align-items:center;
    justify-content:center;
    font-size:35px;
`

const StyledProfileWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    margin-left:40px;
    
    :hover{
        svg{
        transform: scaleY(1.1);
        }   
    }

    svg{
        margin-left:10px;
        width:50px;

        .a{
            fill:white;
        }
    }
`

const Head = styled.h5`
    font-family:Roboto;
`
const Navigation = styled.div`
    position:absolute;
    right:50px;
    top:50%;
    transform:translateY(-50%);
`

const Header = ({ modalLoginIsOpen, setModalLoginIsOpen }) => {

    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const context = useContext(authContext)

    return (
        <>
            {
                context.stateAuth.token ? (
                    <>
                        <StyledHeaderWrapper>

                            <Logo />

                            <Navigation>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', }}>
                                    <NavItem icon='mags' />
                                    <NavItem icon='dormitory' />
                                    <div>
                                        <StyledProfileWrapper onClick={() => setIsOpenProfile(!isOpenProfile)}>
                                            <Head>Profile</Head>
                                            <Google />
                                        </StyledProfileWrapper>
                                        {isOpenProfile && (
                                            <ProfileMenu />
                                        )}
                                    </div>
                                </div>

                            </Navigation>
                        </StyledHeaderWrapper>
                    </>

                )
                    :
                    (
                        <>

                            <StyledHeaderWrapper>

                                <Logo logout={"logout"} />
                                <Navigation>
                                    <Button onClick={() => setModalLoginIsOpen(true)}>Allohomora</Button>
                                </Navigation>
                            </StyledHeaderWrapper>
                        </>
                    )

            }
        </>
    )
}

export default Header