import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import MediaQuery from '../../assets/MediaQuerys/MediaQuerys';
import { Box } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: MediaQuery(250, 345),
  position: 'relative'
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: 'auto',
});

const StyledMedia = styled(CardMedia)({
  height: 140,
});
const DescriptionBox = styled(Box)({
  marginBottom: '3rem'
})

const ButtonBox = styled(Box)({
  marginTop: 'auto',
  textAlign: 'center',
  position: 'absolute',
  bottom: '1.5rem',  
  width: 'calc(100% - 20px)'
})

function MiCard({ titulo, imagen, desc }) {
  return (
    <StyledCard>
      <StyledMedia
        component="img"
        image={imagen} // Aquí puedes poner la URL de tu imagen
        alt={titulo}
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <DescriptionBox>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </DescriptionBox>
        <ButtonBox>
          <Button color='primary' variant='contained'>
            Mas
          </Button>
        </ButtonBox>
      </StyledCardContent>
    </StyledCard>
  );
}

export default MiCard;
