import React from 'react'
import styled from 'styled-components';
import star from '../assets/Star.png';
import starContained from '../assets/StarContained.png';

import AE from '../assets/AE.png'
import AI from '../assets/AI.png'
import PS from '../assets/PS.png'
import Figma from '../assets/Figma.png'

const Wrapper=styled.div`
margin-top:90px;
height:500px;
width:950px;
`;
const Title=styled.div`
font-size: 34px;
line-height: 42px;
font-weight:700;
`;
const Span=styled.div`
margin-top:70px;
font-size: 18px;
line-height: 22px;
`;
const WrapperCustom=styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin-top:80px;
`;


const CardWrapper=styled.div`

`;
const CardImage=styled.img`
width:90px;
height:90px;
background-image:cover;
`;
const RateWrapper=styled.div``;
const CardTitle=styled.div``;
const Card=props=>{
    const {img,title}=props;
    const rate=[1,1,1,1,0]
    return(
        <CardWrapper>
            <CardImage src={img}/>
            <CardTitle>{title}</CardTitle>
            <RateWrapper>
                {rate.map(start=>start==1?<img src={starContained}/>:<img src={star}/>)}
            </RateWrapper>
        </CardWrapper>
    )
}
const title1='Adobe Photoshop'
const title2='Adobe Illustrator'
const title3='Adobe After Effects'
const title4='Figma'
 
const Skills = () => {
    return (
        <Wrapper>
            <Title>Skills</Title>
            <Span>I work in such programs as</Span>
            <WrapperCustom>
                <Card title={title1} img={PS}/>
                <Card title={title2} img={AI}/>
                <Card title={title3} img={AE}/>
                <Card title={title4} img={Figma}/>
            </WrapperCustom>
        </Wrapper>
    )
}

export default Skills
