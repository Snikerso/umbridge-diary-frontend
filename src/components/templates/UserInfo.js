import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import UserInfoHead from 'components/molecules/UserInfoHead'


const StyleWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    justify-items:left;
    margin:40px;
    >*{
        margin-top:30px;
    }

`
const Head = styled.div`

    font: Bold 28px/34px Roboto;
    margin-bottom:10px;

`


const UserInfo = () => {

    return (
        <>
            <StyleWrapper>
                <UserInfoHead />

                <div>
                    <Head>User Info</Head>
                    <Input placeholder="change name" />
                </div>
                <div>
                    <Head>Password</Head>
                    <Input placeholder="change password" />
                </div>
                
                <Button>Edit</Button>

            </StyleWrapper>

        </>
    )
}

export default UserInfo