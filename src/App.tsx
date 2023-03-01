import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { recoilState } from './recoil/atoms';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, ligthTheme } from './theme';



function App() {
  const isDark = useRecoilValue(recoilState)
  console.log(isDark)
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }, [isDark])
  return (
    <ThemeProvider theme={isDark ? ligthTheme : darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
