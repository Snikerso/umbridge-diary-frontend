import React from 'react';
import styled from 'styled-components';
import ImageMags from 'assets/magician.jpg';
import ImageDormitories from 'assets/dormitories.jpg';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction:column;
    grid-template-columns: 1fr;
    justify-content:center;
    width:100%;
    margin:40px auto;


    p{
       font:  14px/31px Roboto;
    }
`;

const StyledWrapperItem = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    margin: 50px auto;
    p {font:  18px Roboto;}
h1{
    margin-left:50px;
}


    >:nth-child(1){
        flex-basis:100%;
        margin-bottom:30px;    
    }


    >:nth-child(3){
        flex-basis:50%;
        align-self:center;
        justify-self:center;
        margin-left:36px;
    }
`;
const Head = styled.div`
    text-align:center;
    font-size:21px;

    p {font:  24px Roboto;}

    >*{
        margin-bottom:20px;
    }
`;

const Img = styled.div`
    width: 344px;
    height: 268px;
    box-shadow: 0px 3px 6px #00000029;
    border: 2px solid #4D0506;
    border-radius: 34px;
    background-image: url(${props => props.src}) ;
    background-position: content; 
    background-repeat: no-repeat;
    background-size: cover;     
`;


const Home = () => {

    return (
        <>
            <StyledWrapper>
                <Head>
                    <h1>Welcome to Mrs. Umbridge's diary !</h1>
                    <p>See how you can easily measure activity and achievements of magicians in your lessons!</p>
                </Head>
                <StyledWrapperItem>
                    <h1>Mags</h1>
                    <Img src={ImageMags}></Img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </StyledWrapperItem>
                <StyledWrapperItem>
                    <h1>Dormitories</h1>
                    <Img src={ImageDormitories}></Img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </StyledWrapperItem>
            </StyledWrapper>
        </>
    )
}

export default Home;