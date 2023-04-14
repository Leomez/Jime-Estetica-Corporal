import { React } from "react";
import { Box, Divider, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from '../../assets/Imgs/Logo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import s from './Footer.module.css'
import MediaQuery from "../../assets/MediaQuerys/MediaQuerys";
import { width } from "@mui/system";

const Item = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '10rem',    
})
const LogoContainer = styled(Box)({
    width: '3rem'
})

function Footer() {
    return (
        <div className={s.container}>
            <Stack
                direction={'row'}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Item sx={{paddingRight: MediaQuery('2rem','10rem')}}>
                    <LogoContainer>
                        <img className={s.logo} src={Logo} alt="Estetica Jime" />
                    </LogoContainer>
                    <Typography color='palevioletred' fontWeight={600} width={'max-content'}>
                        <span style={{width: '100%'}}>Estetica Jime</span>                        
                    </Typography>
                    <Grid container spacing={2} >
                        <Grid item>
                            <FacebookIcon color="primary" />
                        </Grid>
                        <Grid item>
                            <InstagramIcon color="primary" />
                        </Grid>
                        <Grid item>
                            <WhatsAppIcon color="primary" />
                        </Grid>
                    </Grid>
                </Item>
                <Item sx={{paddingRight: MediaQuery('2rem','10rem')}}>
                    <Typography color='palevioletred' fontWeight={600}>
                        ENLACES DE INTERES
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography color="primary">
                                Tratamientos
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography color="primary">
                                Nosotros
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography color="primary">
                                Contacto
                            </Typography>
                        </ListItem>
                    </List>

                </Item>

            </Stack>
            <Box sx={{
                margin: 'auto',
                padding: '10px',
                textAlign: 'center'
            }}>
                <Typography sx={{
                    fontSize: '14px',
                    color: '#555',
                    margin: 0,
                    paddingTop: '3rem'
                }}>
                    <hr></hr>
                    <copyright>Derechos reservados &copy; 2023 Estetica Jime por Leomez </copyright>
                </Typography>
            </Box>

        </div>
    )
}


export default Footer