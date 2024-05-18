import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import CarroEdit from '../adicionar/carroEdit';

const Carro = () => {
  const { id } = useParams();

  return (
    <Box marginTop={14}>
      <h1>Edição de Carros</h1>
      <CarroEdit carrosId={id} />
    </Box>
  );
};

export default Carro;
