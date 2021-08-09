import React from 'react'
import styled from 'styled-components';
const Wrapper=styled.div`
max-width:954px;
min-width:900px;
height:90px;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
border-bottom:2px solid black;
z-index:10;

@media (max-width:768px){
    flex-flow:column nowrap;
    background-color:blue;
    position:fixed;
    transform:${({open})=>open?'translateX(100%)':'translateX(0)'};
    top:0;
    right:0;
    height:100vh;
    width:300px;
    padding-top;3.5rem;
    transition:transform .3s easy-in-out;
}
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
const RightNav = ({open}) => {
  return (
    <Wrapper open={open}>
            <Link href='/' active>Hello</Link> 
            <Link href='/'>About me</Link> 
            <Link href='/'>Skills</Link> 
            <Link href='/'>Portfolio</Link> 
            <Link href='/'>Contacts</Link> 
        </Wrapper>
  )
}

export default RightNav
