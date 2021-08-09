import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
width:100%;
height:500px;
background: #F6F6F6;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title=styled.span`
font-size: 34px;
line-height: 42px;
`;
const Span=styled.span`
width: 485.34px;
font-size: 18px;
line-height: 22px;
margin-top:40px;
`;
const AboutMe = () => {
    return (
        <Wrapper>
            <Title>About me</Title>
            <Span> Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</Span>
            <Span>I'm studying at courses "Web and mobile design interfaces" in IT-Academy. </Span>
            <Span>Ready to implement excellent projects with wonderful people.</Span>
        </Wrapper>
    )
}

export default AboutMe
