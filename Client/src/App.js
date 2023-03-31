import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './LandingPages/Home/home';
import Paleta from './LandingPages/paleta';
// import colores from './assets/Temas/colores/colores';
import palette from './assets/Temas/colores/colores'

const tema = createTheme({palette})

  function App() {

    
    return (
      <ThemeProvider theme={tema}>
        {console.log(tema)}
        <div>app</div>
        <Paleta />
        <Home />
      </ThemeProvider>
    );
  }

export default App;
