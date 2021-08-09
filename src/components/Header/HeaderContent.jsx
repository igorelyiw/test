import React from 'react'
import styled from 'styled-components';
import picture from '../assets/picture.png'
const Wrapper = styled.div`

`;
const ContentTop = styled.div`
display:flex;
justify-content:space-between;
align-items:baseline;
margin-top:40px;
`;
const Image = styled.img`
margin-top:50px;
max-width:100%;
`;
const Logo = styled.div`
font-size: 47.3392px;
line-height: 59px;
width:123px;
height:118px;
`;
const Text = styled.div`
width:160px;
text-align:left;
font-size: 18px;
line-height: 22px;

`;
const Language = styled.span`
transform:rotate(-90deg);
`;
const HeaderContent = () => {
    return (
        <Wrapper>
            <ContentTop>
                <Logo>
                    Denis Novik</Logo>
                <Text>
                    UX | UI designer  24 years old, Minsk</Text>
                <Language>RU|ENG</Language>
            </ContentTop>
            <Image src={picture} />
        </Wrapper>
    )
}

export default HeaderContent
