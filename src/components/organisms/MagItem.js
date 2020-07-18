import React from 'react';
import styled from 'styled-components';
import ButtonCount from 'components/atoms/ButtonCount';
import { ReactComponent as Delete } from 'assets/delete.svg';
import { ReactComponent as Add } from 'assets/plus.svg';
import { ReactComponent as Minus } from 'assets/minus.svg';

const StyleWrapper = styled.div`
    display: grid;
    width:400px;
    margin:15px;
    align-items:center;
    justify-items:left;
    justify-content:left;
    grid-template-columns: 40% 10% 10% 10% 10% ;
`
const StyledWrapperAddMinus = styled.div`
    align-self:start;
`
const MagName = styled.div`
    font-size:30px;
    font-weight:bold;
    color:${props => props.theme.primary};
`
const MagicScore = styled.div`
    font-size:35px;
    font-weight:bold;
    color:${props => props.theme.secondary};
`
const StyledPlus = styled(Add)`
    .a{
            fill:${props => props.theme.green};
        }
    width:15px;
    :hover{
        .a{
            fill:green;
        }
    }

`

const StyledMinus = styled(Minus)`
    .a{
            fill:${props => props.theme.primary};
        }
    width:15px;
    :hover{
        .a{
            fill:red;
        }
    }

`

const MagItem = ({ item, handleMagScoreAdd, handleMagScoreMinus, handleMagDelete, dispatchMag }) => {

    return (
        <StyleWrapper key={item.id}>
            <MagName >{item.title}</MagName>
            <MagicScore>{item.magicscore}</MagicScore>
            <StyledWrapperAddMinus>
                <StyledPlus onClick={() => handleMagScoreAdd(item)} />
                <StyledMinus onClick={() => handleMagScoreMinus(item)} />
            </StyledWrapperAddMinus>


            {item.present ? (
                <ButtonCount onClick={() => dispatchMag({ type: 'PresentMag', item })} present></ButtonCount>
            ) : (
                    <ButtonCount onClick={() => dispatchMag({ type: 'PresentMag', item })} unpresent></ButtonCount>
                )}

            <Delete width={30} onClick={() => handleMagDelete(item)} />

        </StyleWrapper>
    )
}

export default MagItem