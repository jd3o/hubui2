import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './Components/header/header.component';
import HomePage from './Containers/Home/home.component';
import Theme from './theme';
import './App.css';

const theme = Theme();

function App(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme.mainTheme}>
        <CssBaseline />
        <ThemeProvider theme={theme.blackTheme}>
          <Header  />
        </ThemeProvider>
        <HomePage/>
      </ThemeProvider>
    </React.Fragment>
  );
}




export default App;
