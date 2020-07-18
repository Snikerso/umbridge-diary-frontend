import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import magContext from 'contexts/magContext';
import Button from 'components/atoms/Button';
import Head from 'components/atoms/Head';
import Input from 'components/atoms/Input';
import MagItem from 'components/organisms/MagItem';
import MagHead from 'components/molecules/MagHead';

import { ReactComponent as Hat } from 'assets/hat.svg';



const StyledWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr ;
    margin-top:20px;
`
const StyledWrapperForm = styled.div`
    display:grid;
    height:300px;
    margin:50px;
`
const StyledWrapperMagsList = styled.div`
    margin-top:100px;
`
const StyledWrapperRandomMag = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    >:nth-child(2){
        font-size:30px;
    }

`

const StyledWraperInfo = styled.div`
    display:grid;
    align-items:center;
    justify-items:center;
    color:${props => props.theme.primary};
    grid-template-columns:1fr;
    font-size:30px;
    gap:40px;
    margin-top:100px;
`




function UserProgress() {

    const [magName, setMagName] = useState('')
    const [randomMag, setRandomMag] = useState(null)

    const { stateMag, dispatchMag } = useContext(magContext)




    const handleMagAdd = () => {

        if (magName.length > 0) {

            const token = localStorage.getItem('token')
            fetch(`${process.env.REACT_APP_API_URL}/api/userprogress/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify({ title: magName })
            }).then(res =>
                res.json(),

                setMagName('')
            ).then(res => {
                let mag = res;
                dispatchMag({ type: 'AddMag', mag })
            }
            )
        }
    }

    const handleMagDelete = (item) => {
        const token = localStorage.getItem('token')
        axios.delete(`${process.env.REACT_APP_API_URL}/api/userprogress/${item.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
        }).then(res => {

            dispatchMag({ type: 'DeleteMag', item })

        })

    }

    const handleRandom = () => {
        let randomArray = stateMag.filter(item => item.present == true)

        let item = randomArray[Math.floor(Math.random() * randomArray.length)];
        if (randomArray.length > 0) {
            setRandomMag(item.title)
        }

    }

    const handleMagScoreAdd = (item) => {
        const token = localStorage.getItem('token')
        fetch(`${process.env.REACT_APP_API_URL}/api/userprogress/${item.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ title: item.title, magicscore: item.magicscore + 1, present: item.present })
        }).then(
            dispatchMag({ type: 'AddMagicScore', item })

        )

    }
    const handleMagScoreMinus = (item) => {
        const token = localStorage.getItem('token')
        fetch(`${process.env.REACT_APP_API_URL}/api/userprogress/${item.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ title: item.title, magicscore: item.magicscore - 1, present: item.present })
        }).then(
            dispatchMag({ type: 'MinusMagicScore', item })

        )

    }





    return (
        <>
            <StyledWrapper>
                <StyledWrapperForm>
                    <MagHead />
                    <Input value={magName} onChange={e => setMagName(e.target.value)} placeholder="Mag's name" />
                    <Button onClick={handleMagAdd}>Add mag</Button>
                </StyledWrapperForm>
                <StyledWrapperMagsList>
                    {stateMag.length > 0 ? stateMag.map(item => {
                        return (

                            <MagItem
                                item={item}
                                handleMagDelete={handleMagDelete}
                                handleMagScoreAdd={handleMagScoreAdd}
                                handleMagScoreMinus={handleMagScoreMinus}
                                dispatchMag={dispatchMag}
                            />

                        )
                    }
                    ) : (
                            <StyledWraperInfo>
                                <p>You don't have any magician yet.</p>
                                <Hat />
                            </StyledWraperInfo>
                        )}
                    {stateMag.length > 0 && (
                        <StyledWrapperRandomMag>
                            <Button onClick={() => handleRandom()}>Random</Button>
                            <h3>{randomMag}</h3>
                        </StyledWrapperRandomMag>)}



                </StyledWrapperMagsList>
            </StyledWrapper>

        </>
    );
}

export default UserProgress;