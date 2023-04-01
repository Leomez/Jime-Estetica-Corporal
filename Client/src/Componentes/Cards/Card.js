import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  maxWidth: 345,
});

const StyledMedia = styled(CardMedia)({
  height: 140,
});

function MiCard({titulo, imagen, desc}) {
  return (
    <StyledCard>
      <StyledMedia
        component="img"
        image={imagen} // Aquí puedes poner la URL de tu imagen
        alt={titulo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default MiCard;
