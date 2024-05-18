import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCarroApi from "../../hooks/useCarroApi";
import { Box, TextField, Button, Card, CardMedia, Typography } from "@mui/material";

const CarroAdd = () => {
    const navigate = useNavigate();
    const { data } = useCarroApi(`http://localhost:5000/cars/`);

    const [carros, setCarros] = useState(data || {
        id: "",
        name: "",
        brand: "",
        color: "",
        year: "",
        imageUrl: ""
    });
    const [errors, setErrors] = useState({});  

    useEffect(() => {
        if (data) {
            setCarros({
                ...data,
                year: "", // Inicialize o ano como uma string vazia
            });
        }
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarros((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveClick = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
        console.log("Botão 'Salvar' clicado");
    

        
        let formErrors = {};
    
        // Validar campos
        if (!carros.name.trim()) {
            formErrors = { ...formErrors, name: "Nome é obrigatório" };
        }
        if (!carros.brand.trim()) {
            formErrors = { ...formErrors, brand: "Marca é obrigatória" };
        }
        if (!carros.color.trim()) {
            formErrors = { ...formErrors, color: "Cor é obrigatória" };
        }
        if (!carros.year || carros.year < 1900 || carros.year > 2025) {
            formErrors = { ...formErrors, year: "Ano inválido" };
        }
    
        // Se houver erros, atualizar o estado de erros e não enviar o formulário
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
    
        // Se não houver erros, enviar os dados para o servidor
        axios.post("http://localhost:5000/cars", carros)
            .then(() => {
                navigate("/list");
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const handleCancelClick = () => {
        navigate("/list");
    };

    return (
        <Box marginTop={14}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#1a237e' }}>
                Adicionar Novo Carro
            </Typography>

            <form onSubmit={handleSaveClick}>
                <TextField
                    label="Nome"
                    name="name"
                    value={carros.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    label="Marca"
                    name="brand"
                    value={carros.brand}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    error={!!errors.brand}
                    helperText={errors.brand}
                />
                <TextField
                    label="Cor"
                    name="color"
                    value={carros.color}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    error={!!errors.color}
                    helperText={errors.color}
                />
                <TextField
                    label="Ano"
                    name="year"
                    type="number" 
                    inputProps={{ min: 1900, max: 2100 }} 
                    value={carros.year}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    error={!!errors.year}
                    helperText={errors.year}
                />
                <TextField
                    label="Imagem Url"
                    name="imageUrl"
                    value={carros.imageUrl}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                {carros.imageUrl && (
                    <Card sx={{
                            maxWidth: 345, 
                            margin: '16px 0',
                        }}
                    >
                        <CardMedia
                            sx={{ height: 200, objectFit: 'contain' }}
                            image={carros.imageUrl}
                            title={carros.name}
                        />
                    </Card>
                )}

                <Button type="submit" variant="contained" color="primary" style={{ marginRight: "20px"}}>
                    Salvar
                </Button>
                <Button variant="contained" color="secondary" onClick={handleCancelClick}>
                    Cancelar
                </Button>
            </form>
        </Box>
    );
};

export default CarroAdd;
