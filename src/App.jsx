import React, { useState } from 'react';
import Modal from './components/Modal';
import Toggler from './components/Toggler';
import GlobalStyles from './components/styles/Global';
import { Wrapper } from './components/styles/Wrapper.styled';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styles/Theme';

const App = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <Toggler toggleTheme={toggleTheme} />
          <Modal />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default App;
