import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';


const StyleWrapper = styled.div`
display:grid;
width:400px;
height:300px;
background-color: ${props => props.theme.secondary};
border-radius:20px;
grid-template-rows:30% 1fr;
justify-content:center;
align-content:center;
text-align:center;
`;

const StyledInput = styled(Input)`
    width: 260px;
`;

const CardDormitoryEmpty = ({ dispatchDormitorys}) => {

    const [dormitoryName, setDormitoryName] = useState('')


    const handleAddDormitoryName = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/dormitorys/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                title: dormitoryName
            })
        }).then(res => 
            res.json()

        ).then( res =>{
            console.log(res)
            const dormitory = { id: res.id, mags: [], title: dormitoryName }
            dispatchDormitorys({ type: 'AddNewDormitory', dormitory })
        })
    }

    return (

        <StyleWrapper >
            <StyledInput style={{ marginTop: '30px' }} placeholder="Dormitorium name" value={dormitoryName} onChange={(e) => setDormitoryName(e.target.value)} />

            {dormitoryName.length > 0 ?
                (
                    <div onClick={() => handleAddDormitoryName()} style={{ fontSize: '150px', color: 'white', cursor: 'pointer' }}>+</div>
                ) : (
                    <div style={{ fontSize: '150px' }} >+</div>
                )}
        </StyleWrapper>
    )
}

export default CardDormitoryEmpty;
