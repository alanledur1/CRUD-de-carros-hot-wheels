import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

// Estilizando o Drawer para ter uma largura fixa
const DrawerContainer = styled.div`
  width: 240px;
`;

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        {/* Ícone do menu para abrir o Drawer */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        {/* Título da barra de navegação */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HotWheels
        </Typography>
        {/* Drawer lateral */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
          {/* Conteúdo do Drawer */}
          <DrawerContainer>
            {/* Lista de itens de navegação */}
            <List>
              <ListItem button onClick={handleDrawerClose} component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={handleDrawerClose} component={Link} to="/sobre">
                <ListItemText primary="Sobre" />
              </ListItem>
              <ListItem button onClick={handleDrawerClose} component={Link} to="/list">
                <ListItemText primary="Lista de Carros" />
              </ListItem>
              <ListItem button onClick={handleDrawerClose} component={Link} to="/addcar">
                <ListItemText primary="Adicionar Carro" />
              </ListItem>
            </List>
          </DrawerContainer>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
