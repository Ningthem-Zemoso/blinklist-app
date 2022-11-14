import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import axios from 'axios';
import { blinkTheme } from './theme'
import { Button, Typography } from '@mui/material';


axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const App: React.FC = () => {

  return (
    <ThemeProvider theme={blinkTheme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
