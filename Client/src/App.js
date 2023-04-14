import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './LandingPages/Home/home';
import Paleta from './LandingPages/paleta';
// import colores from './assets/Temas/colores/colores';
import palette from './assets/Temas/colores/colores'
import { CssBaseline } from '@mui/material';
import Navbar from './Secciones/Navbar/Navbar';
import Footer from './Secciones/Footer/Footer';

const tema = createTheme({ palette })

function App() {


  return (
    <ThemeProvider theme={tema}>
      <Navbar/>
      <CssBaseline />
      {/* <Paleta /> */}
      <Home />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
