import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StrictMode } from 'react';
// import { Helmet } from 'react-helmet';
// import { HelmetProvider } from 'react-helmet-async';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
// import Minute from './components/Minute';
import { recoilLocalState } from './recoil/atoms';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, ligthTheme } from './theme';
import { DragDropContext } from 'react-beautiful-dnd';
import ToDodnd from './components/ToDodnd';

const Toggle = styled.button`
display:flex;
align-items:center;
justify-content:center;
position:fixed;
top:1rem;
right:1rem;
width:3rem;
height:3rem;
padding:0;
font-size:1.6rem;
border:none;
border-radius:50%;
background-color:${props => props.theme.bgColor};
color:${props => props.theme.cardColor};
box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
`

function App() {
  const [isDark, setIsDark] = useRecoilState(recoilLocalState)
  const toggleTheme = () => {
    setIsDark((prev: any) => !prev)
  }

  return (
    <>
      <ThemeProvider theme={isDark ? ligthTheme : darkTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Helmet>
            <title>React Trello</title>
            <link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap' rel='stylesheet'></link>
          </Helmet>
        </HelmetProvider>
        <Toggle onClick={toggleTheme}><FontAwesomeIcon icon={isDark ? faMoon : faLightbulb} /></Toggle>
        <ToDodnd />
      </ThemeProvider>
    </>
  );
}

export default App;
