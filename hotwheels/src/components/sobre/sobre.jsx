import React from "react";
import { Container, Typography } from "@mui/material";

function SobreConteudo() {
    return (
        <Container id="sobre" sx={{ mt: 4, marginTop:14 }}>
            <Typography variant="h2" gutterBottom>
                Sobre
            </Typography>
            <Typography variant="body1" paragraph>
                Esta é uma aplicação para um CRUD de carros HotWheels.
            </Typography>
            <Typography variant="body1" paragraph>
                Aqui você pode adicionar novos carros à sua coleção, editar informações dos carros existentes, excluir carros que não deseja mais manter e muito mais!
            </Typography>
            <Typography variant="body1" paragraph>
                Desenvolvido utilizando React.js e Material-UI para a interface do usuário, e Express.js para o backend.
            </Typography>
            <Typography variant="body1">
                Se divirta explorando e gerenciando sua coleção de carros HotWheels!
            </Typography>
        </Container>
    );
}

export default SobreConteudo;
