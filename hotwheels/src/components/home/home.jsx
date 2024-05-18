import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <Box marginTop={16}>
            <Card sx={{
                alignItems: 'center',
                mb: 0,
                pl: 10,
                backgroundColor: "#f3eded",
                height: 300,
                borderRadius: 10,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <CardContent>
                    <Typography variant="h3" sx={{ mt: 2, color: '#1a237e' }}>Bem-vindo ao CRUD de HotWheels!</Typography>
                    <Typography variant="h5" sx={{ mt: 2, color: '#424242' }}>Aqui você pode:</Typography>
                    <Typography variant="body1" sx={{ mt: 2, color: '#424242' }}>
                        - Adicionar novos carros à sua coleção
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#424242' }}>
                        - Editar as informações dos carros existentes
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#424242' }}>
                        - Excluir carros que não deseja mais manter
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#424242' }}>
                        - E muito mais!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Home;
