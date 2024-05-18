import React, { useEffect, useState } from "react";
import useCarroApi from "../../hooks/useCarroApi";
import { Link } from "react-router-dom";
import { Button, Box, Card, CardContent, IconButton, CircularProgress, Modal } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListCars = () => {
    const { getAllCar, deleteCarroApi } = useCarroApi();
    const [carros, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCars, setSelectedCars] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCar();
                setCars(data);
                setLoading(false);
                console.log(data);
            }   catch (error) {
                console.log("Error fetching cars:", error, loading);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            if (!selectedCars) {
                console.log("Nenhum carro selecionado para exclusão");
                return;
            }
            
            console.log("ID do carro selecionado para exclusão:", selectedCars.id);
            await deleteCarroApi(selectedCars.id);
            console.log("Carro excluído com sucesso:", selectedCars.id);
            setCars((prevCars) =>
                prevCars.filter((car) => car.id !== selectedCars.id)
            );
            console.log("Lista de carros atualizada:", carros);
            handleCloseModal();
        } catch (error) {
            console.log("Error deleting cars:", error);
        }
    };


    const handleCloseModal = () => {
        setSelectedCars(null);
        setOpenModal(false);
    };
    
    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    
    return (
        <Box marginTop={11} marginBottom={3}>
            {carros.map((carro) => (
                <Card
                    data-testid="cars"
                    key={carro.id}
                    sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        mb: 2, pl: 2, 
                        maxHeight: 200, 
                        backgroundColor:"#f3eded",
                        borderRadius: 10,
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.2s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.02)"
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: "90%",
                            maxWidth: 250,
                            height: 0,
                            paddingTop: "90%",
                            position: "relative",
                        }}
                    >
                        <Link to={`/cars/${carro.id}`} style={{ textDecoration: 'none' }}>
                            <img
                                src={carro.imageUrl}
                                alt={carro.name}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "150%",
                                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
                                    cursor: "pointer",
                                    border: "2px solid transparent",
                                }}
                            />
                        </Link>

                    </Box>
                    <CardContent>
                    <Link to={`/cars/${carro.id}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" style={{ fontFamily: 'Arial', fontSize: '1.5rem', color: '#333', marginBottom: 10 }}>
                            {carro.name}
                        </Typography>
                    </Link>
                        <Typography style={{ marginRight: 10, marginBottom: 5, fontFamily: 'Arial', fontSize: '1.2rem', color: '#333' }} variant="subtitle1">{carro.brand}</Typography>
                        <Typography style={{ marginBottom: 5, fontFamily: 'Arial', fontSize: '1.2rem', color: '#666' }} variant="subtitle1">{carro.color}</Typography>
                        <Typography style={{ marginBottom: 10, fontFamily: 'Arial', fontSize: '1.2rem', color: '#999' }} variant="subtitle1">{carro.year}</Typography>

                    </CardContent>
                    <IconButton
                        style={{
                            position: "relative",
                            bottom: 0,
                            right: 0,
                            margin: '10px',
                            backgroundColor: "#ffffff",
                            borderRadius: "50%", 
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                      
                        }}
                        data-testid="delete-button"
                        onClick={() => {
                            setSelectedCars(carro);
                            setOpenModal(true);
                        }} 
                    >
                        <DeleteIcon />
                    </IconButton>
                </Card>
            ))}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        maxWidth: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4, 
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Confirmar exclusão
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Deseja realmente excluir o Carro "{selectedCars?.name}"?
                    </Typography>
                    <Box 
                        sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleCloseModal}
                            sx={{ marginRight: 2 }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            data-testid="confirm-delete-button"
                            variant="contained"
                            onClick={() => handleDelete(selectedCars?.id)}
                            color="error"
                        >
                            Excluir
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};


export default ListCars;