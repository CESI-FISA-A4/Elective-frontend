import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
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