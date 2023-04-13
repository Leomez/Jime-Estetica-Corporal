import React from "react";
import { Typography, Box, Button, Paper, Container } from "@mui/material"
import tipografia from "../../assets/Temas/tipografias/Tipografias";

import TratPrincipales from "../../Componentes/TratPrincipales/TratPrincipales";
import Ubicacion from "../../Componentes/Ubicacion/Ubicacion";


const bgImg = "https://companiadebelleza.com/wp-content/uploads/2021/09/Masaje.jpg"

const Home = () => {
    return (
        <>
            <Box sx={{
                minHeight: "75vh",
                backgroundImage: `linear-gradient(224deg, rgba(66, 66, 74, 0.5), rgba(25, 25, 25, 0.5)),url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                display: "grid",
                placeItems: "flex-start"
            }}>
                <Box paddingBottom={"6rem"} textAlign={"center"} marginTop={"5rem"}>
                    <Typography color={"white"} sx={tipografia.titulo}>
                        Sentite Bien Con Tu Cuerpo
                    </Typography>
                    <Typography color={"palevioletred"} padding={2} sx={tipografia.Subtitulo1}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Button color="primary" variant="contained">
                        RESERVA TU TURNO
                    </Button>
                </Box>
            </Box>
            <Container sx={{ display: 'flex' }} maxWidth={'xl'}>
                <Paper sx={{
                    marginTop: "-3rem",
                    paddingTop: "5rem",
                    backgroundColor: "#ffffff9e",
                    boxShadow: "0 8px 12px -4px rgba(0,0,0,.6)",
                    backdropFilter: "blur(30px)",
                    borderRadius: "20px",
                    width: "100%"
                }}>
                    <TratPrincipales />
                    <Ubicacion />
                </Paper>
            </Container>
        </>
    )
}

export default Home