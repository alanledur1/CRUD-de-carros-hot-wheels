import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Card, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import useCarroApi from '../../hooks/useCarroApi';

const CarroEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { fetchCarro, updateCarroApi } = useCarroApi();
  const [carros, setCarros] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isDataLoaded) {
          const carroData = await fetchCarro(id);
          setCarros(carroData);
          setIsDataLoaded(true);
        }
      } catch (error) {
        console.log('Error fetching car:', error);
      }
    };
  
    fetchData();
  }, [isDataLoaded, fetchCarro, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarros((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      console.log('Dados do carro a serem atualizados:', carros);
      await updateCarroApi(carros);
      setIsSaved(true);
      navigate('/list');
    } catch (error) {
      console.log('Error saving carro:', error, isSaved);
    }
  };
  

  if (!carros) {
    return <Typography variant="body1">Carro não encontrado.</Typography>;
  }

  return (
    <Box marginTop={14}>
        <form>
            <TextField
                label="Nome"
                name="name"
                value={carros.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Marca"
                name="brand"
                value={carros.brand}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Cor"
                name="color"
                value={carros.color}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Ano"
                name="year"
                value={carros.year}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Imagem"
                name="imageUrl"
                value={carros.imageUrl}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardMedia sx={{ height: 200, objectFit: "contain" }} image={carros.imageUrl} title={carros.name} />
            </Card>

            <Button variant="contained" color="primary" onClick={handleSaveClick}>
                Salvar
            </Button>
        </form>
    </Box>
  );
};

export default CarroEdit;
