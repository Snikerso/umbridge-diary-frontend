import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'components/atoms/Select';
import { ReactComponent as Delete } from 'assets/delete.svg';
import { ReactComponent as Plus } from 'assets/plus.svg';
import { ReactComponent as Minus } from 'assets/minus.svg';


const StyleWrapper = styled.div`
    width:350px;
    height:250px;
    background-color: ${props => props.theme.secondary};
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows:30% 1fr ;
    margin:10px;
    border-radius:20px;
    justify-content:center;
`;

const Head = styled.h1`
    align-self:center;
    justify-self:center;
    text-align:center;
    margin-top:25px;
    color:${props => props.theme.primary};
`;

const InnerWrapper = styled.div`
    margin:10px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
`;

const StyledWrapperSelect = styled.div`
    flex-basis:100%;
    display:flex;
    align-items:center;
`;

const StyledWrapperMag = styled.div`
    display:flex;
    font-family: Roboto;
    font-size:15px;
    font-weight:bold;
    color:white;
    align-items:center;
    justify-content:space-between;
    width:120px;
    margin:3px;
`;

const MagicScoreSum = styled.h1`
    font-family: Roboto;
    font-size:45px;
    color:${props => props.theme.green};
    margin-right:100px;
`;

const StyledDelete = styled(Delete)`
    width:30px;
    position: absolute;
    top: 20px;
    right: 25px;

    .a{
            fill:${props => props.theme.primary};
        }
    
    :hover{
        .a{
            fill:red;
        }
    }
`;

const CardDormitory = ({ dormitory, dispatchDormitorys, stateMag }) => {

    const [magSelect, setMagSelect] = useState({})

    // Count sum magiscore per Dormitory
    let magicscoresum = 0
    for (let value of Object.values(dormitory.mags)) {
        magicscoresum += value.magicscore
    }


    const handleDeleteMagFromDormitory = (item) => {

        let newItems = dormitory.mags.filter((dormitoryitem) => dormitoryitem.id != item.id)

        const token = localStorage.getItem('token')
        fetch(`${process.env.REACT_APP_API_URL}/api/dormitorys/${dormitory.id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            },
            body: JSON.stringify({
                id: dormitory.id,
                title: dormitory.title,
                mags: newItems
            })
        }).then(res => {

            dispatchDormitorys({ type: 'DeleteMagDormitory', item, dormitory })
        })
    };

    const handleAddMagToDormitory = (item) => {

        fetch(`${process.env.REACT_APP_API_URL}/api/dormitorys/${dormitory.id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                id: dormitory.id,
                title: dormitory.title,
                mags: [...dormitory.mags, JSON.parse(magSelect)]
            })
        }).then(res => {
            const mag = JSON.parse(magSelect)
            dispatchDormitorys({ type: 'AddMagToDormitory', mag, dormitory })

        })
    };

    const handleDeleteDormitory = () => {

        fetch(`${process.env.REACT_APP_API_URL}/api/dormitorys/${dormitory.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }).then(res => {
            let dormitoryid = dormitory.id
            dispatchDormitorys({ type: 'DeleteDormitory', dormitoryid })
        })
    };


    return (

        <StyleWrapper key={dormitory.id} >
            <div style={{ position: 'relative' }}>
                <Head>{dormitory.title}</Head>
                <StyledDelete onClick={() => handleDeleteDormitory()} />
            </div>
            <InnerWrapper>

                <StyledWrapperSelect>
                    <Select value={magSelect} onChange={e => setMagSelect(e.target.value)} >
                        <option value='-'>choose mag</option>
                        {stateMag.map(mag => {
                            return (
                                <option value={JSON.stringify(mag)}>{mag.title}</option>
                            )
                        })}
                    </Select>
                    <Plus onClick={() => { handleAddMagToDormitory(magSelect) }} />
                </StyledWrapperSelect>
                <div>
                    {dormitory.mags.map(item => (
                        <>
                            <StyledWrapperMag key={item.id} >
                                <div> {item.title}</div>
                                <Minus width={20} onClick={() => { handleDeleteMagFromDormitory(item) }} />
                            </StyledWrapperMag>
                        </>
                    ))}
                </div>

                <div>
                    <MagicScoreSum>{magicscoresum}</MagicScoreSum>
                </div>
            </InnerWrapper>
        </StyleWrapper>
    )
};


export default CardDormitory;
