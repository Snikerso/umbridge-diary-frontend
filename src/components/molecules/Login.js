import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';


const StyledWrapper = styled.div`

    width:100%;
    height:90%;
    margin-top:5%;
    display:grid;
    text-align:center;
    align-items:center;
    align-content:center;
    justify-content:center;

`
const StyledLoginWrapper = styled.div`
    display:grid;
    width:100%;
    height:100%;
    align-items:center;
    align-content:space-around;
    justify-content:center;
    justify-items:center;

    > * {
        margin:15px;
    }

`
const Head = styled.h1`
    color:${props => props.theme.primary};

`
const Paragraph = styled.p`
    color:${props => props.theme.primary};
    text-decoration:underline;
`

function Login({ userLogin, modalLoginIsOpen, setModalLoginIsOpen }) {

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let history = useHistory()
    const handleSubmitLogin = (e) => {
        e.preventDefault()


        const credentials = { username: name, password: password }

        fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    if (data.token) {
                        localStorage.setItem('token', data.token)
                        console.log(data.token)
                        history.push("/");
                        window.location.reload();
                    }

                }
            ).catch(
                error => console.error(error)
            )

    }

    return (
        <>
            <Modal
                isOpen={modalLoginIsOpen}
                onRequestClose={() => setModalLoginIsOpen(false)}
                style={{
                    overlay: {
                        oppacity: 0.99,
                    },
                    content: {
                        color: 'lightsteelblue',
                        width: '400px',
                        height: '400px',
                        margin: 'auto auto',
                        background: 'white',
                        boxShadow: '0px 4px 6px #00000029',
                        borderRadius: '18px',
                    }
                }}
            >
                <StyledWrapper>
                    <Head> Welcome back </Head>
                    <form onSubmit={handleSubmitLogin}>
                        <StyledLoginWrapper>
                            <Input placeholder="login" type="text" value={name} onChange={handleName} />
                            <Input placeholder="password" type="password" value={password} onChange={handlePassword} />
                            <Button onClick={handleSubmitLogin}>Log in</Button>
                        </StyledLoginWrapper>
                    </form>
                    <Paragraph>Create Diary</Paragraph>
                </StyledWrapper>
            </Modal>

        </>
    );
}



export default Login;