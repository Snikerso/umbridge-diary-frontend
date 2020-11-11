import React, { useContext } from 'react';
import styled from 'styled-components';
import magContext from 'contexts/magContext';
import dormitoryContext from 'contexts/dormitoryContext';
import CardDormitory from 'components/organisms/CardDormitory';
import DormitoryHead from 'components/molecules/DormitoryHead';
import CardDormitoryEmpty from 'components/organisms/CardDormitoryEmpty';


const StyledWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-content:space-between;
    justify-content:space-between;
    margin:40px;
`;

const Dormitory = () => {

    const { dormitorys, dispatchDormitorys } = useContext(dormitoryContext)
    const { stateMag, dispatchMags } = useContext(magContext)

    return (
        <>

            <StyledWrapper>
                <DormitoryHead />
                {dormitorys.map(dormitory => (
                    <CardDormitory
                        stateMag={stateMag}
                        dormitory={dormitory}
                        dispatchDormitorys={dispatchDormitorys}
                    ></CardDormitory>
                ))}
                <CardDormitoryEmpty dispatchDormitorys={dispatchDormitorys} />

            </StyledWrapper>

        </>
    )
}

export default Dormitory;