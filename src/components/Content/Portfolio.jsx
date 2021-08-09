import React from 'react'
import styled from 'styled-components';
import PortfolioImg from '../assets/PortfolioImg.png'
const Wrapper=styled.div``;
const Title=styled.div`
font-size: 34px;
line-height: 42px;
font-weight:700;
`;
const Image=styled.img`
margin-top:40px;
width:100%;
`;
const Link=styled.a`
display:inline-block;
font-size: 18px;
line-height: 22px;
margin-top:40px;
color: #070707;
`;
const Portfolio = () => {
    return (
        <Wrapper>
            <Title>Portfolio</Title>
            <Image src={PortfolioImg}/>
            <Link href="#">Online fashion store - Homepage</Link>
        </Wrapper>
    )
}

export default Portfolio
