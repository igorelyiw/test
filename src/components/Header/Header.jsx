import React from 'react'
import styled from 'styled-components';

const Wrapper=styled.div`
width:950px;
height:90px;
margin-top:33px;
display:flex;
justify-content:space-between;
border-bottom:2px solid black;
`;
const Link=styled.a`
font-size: 18px;
line-height: 22px;
color: #828282;
text-decoration:none;

&:active{
    color:#070707;
    font-weight:700;
}
`;
const Header = () => {
    return (
        <Wrapper>
            <Link href='/' active>Hello</Link> 
            <Link href='/'>About me</Link> 
            <Link href='/'>Skills</Link> 
            <Link href='/'>Portfolio</Link> 
            <Link href='/'>Contacts</Link> 
        </Wrapper>
    )
}

export default Header
