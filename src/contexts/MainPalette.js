import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { StyleProvider } from './contexts/StyleProvider';


const theme = createTheme({
  palette: {
    primary: {
        main: '#1976d2',
    },
    secondary: {
        main: '#f50057',
    },
    blackColor: {
        main: '#000000',
    },
    greenColor: {
        main: '#309F63',
    },
    redColor: {
        main: '#EF2C2C',
    },
    yellowColor: {
        main: '#FBC103',
    },
    bgGrey: {
        main: '#E8E8E8', //TODO mettre a 70% 
    },
    greyColor: {
        main: '#E8E8E8',
    },
    greyFocusColor: {
        main: '#D9D9D9',
    },
    whiteColor: {
        main: '#FFFFFF',
    },
    FontColor: {
        main: '#5A6474',
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyleProvider>
        <App />
      </StyleProvider>
    </ThemeProvider>
  </React.StrictMode>
);