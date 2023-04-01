import React from "react";
import { Typography, Box, Button, Paper, Container, Grid } from "@mui/material"
import tipografia from "../../assets/Temas/tipografias/Tipografias";
import MiCard from "../../Componentes/Cards/Card";


const bgImg = "https://companiadebelleza.com/wp-content/uploads/2021/09/Masaje.jpg"
// lo voy a manejar con redux y se lo paso por props a la card
const trat = [
    {
        img: "https://www.estilospa.com/img/glossary/masajes-descontracturante-3324.jpg",
        titulo: "Descontracturante",
        desc: "El objetivo del masaje descontracturante es devolver a nuestros músculos a su estado natural, aliviar la tensión que sentimos  en la espalda o en el cuello y deshacer los “nudos”, como comúnmente los llamamos, que las malas artes del estrés o una postura incorrecta han provocado en nuestra musculatura."
    },
    {
        img: "https://cfisiomad.org/wp-content/uploads/2022/12/iStock-1291920859-1024x683.jpg",
        titulo: "Quiropraxia",
        desc: "La quiropraxia es un tipo de medicina alternativa que se ocupa del diagnóstico, tratamiento y prevención de los trastornos mecánicos del sistema músculo-esquelético, y de los efectos que éstos tienen sobre el sistema nervioso y la salud general."
    },
    {
        img: "https://www.mdzol.com/u/fotografias/m/2019/12/19/f608x342-7081_36804_0.jpg",
        titulo: "Depilacion definitiva",
        desc: "La fórmula casi perfecta para eliminar de raíz los pelos indeseados.\nConsiste en destruir mediante calor las raíces de los pelos para que éstos no vuelvan a crecer.\n Mediante láser de alexandrita, uno de los método más efectivos, ya que permite llegar a temperaturas más altas para tratar los folículos pilosos, que es donde se encuentran las raíces de los vellos."
    }
]

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
                    backdropFilter: "saturate(200%) blur(30px)",
                    borderRadius: "20px",
                    width: "100%"
                }}>
                    <Typography variant="h4" align="center" color={"primary"}>
                        NUESTROS TRATAMIENTOS
                    </Typography>
                    <Grid container justifyContent='center' sx={{ marginTop: '2rem' }}>
                        <Grid item xs={12} sm={8} md={6} lg={8}>
                            <Grid container spacing={3}>
                                {trat.map((t) => (
                                    <Grid item xs={12} sm={6} md={4} key={t.titulo}>
                                        <MiCard titulo={t.titulo} imagen={t.img} desc={t.desc} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>                    
                </Paper>
            </Container>
        </>
    )
}

export default Home