import React from "react";
import { Typography, Box, Button, Paper, Container } from "@mui/material"
import tipografia from "../../assets/Temas/tipografias/Tipografias";


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
            <Container>
                <Paper sx={{
                    marginTop: "-3rem",
                    paddingTop: "5rem",
                    backgroundColor: "#ffffff9e",
                    backdropFilter: "saturate(200%) blur(30px)",
                    width: "95vw",
                    alignSelf: "center"
                }}>
                    <Typography variant="h4" color={"primary"}>
                        NUESTROS TRATAMIENTOS
                    </Typography>
                </Paper>
            </Container>
        </>
    )
}

export default Home