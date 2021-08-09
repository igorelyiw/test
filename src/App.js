import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HeaderContent from './components/Header/HeaderContent';
import AboutMe from './components/Content/AboutME';
import Skills from './components/Content/Skills';
const Wrapper=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
overflow:hidden;
`;  
function App() {
  return (
    <Wrapper className="App">
      <Header/>
      <HeaderContent/>
      <AboutMe/>
      <Skills/>
    </Wrapper>
  );
}

export default App;
