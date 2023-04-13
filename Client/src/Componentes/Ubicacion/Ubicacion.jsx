import { React } from 'react';

import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { Box, Container, Typography } from '@mui/material';
import iconoUbi from '../../assets/Imgs/iconoUbi.png'
import MediaQuery from '../../assets/MediaQuerys/MediaQuerys';
import { styled } from '@mui/material/styles';


const posicion = [-34.7606367, -58.298007]
function getIcon() {
    return new Icon({
        iconUrl: iconoUbi,
        iconSize: [100, 100]
    })
}

const PosicionContainer = styled(Container)({
    display: MediaQuery("block", "flex"),
    justifyContent: 'space-evenly',
    padding: '3%',
    margin: '5%',
    backgroundColor: '#f8d3e3',
    borderRadius: '10px',
    width: "90%"
})

const Ubicacion = () => {

    return (
        <PosicionContainer>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="h2">
                    Horarios y ubicación
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    Abierto de lunes a viernes de 9:00 a 20:00 hs.
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    C. 876 3447 Dpto. 1, B1881 Quilmes, Provincia de Buenos Aires
                </Typography>
            </Box>
            <Box width={MediaQuery('100%', 300)}>
                <MapContainer style={{ height: "300px", width: "100%" }} center={posicion} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={posicion}
                        icon={getIcon()}
                    >
                        <Popup>Estetica Jime</Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </PosicionContainer>

    )

}


export default Ubicacion