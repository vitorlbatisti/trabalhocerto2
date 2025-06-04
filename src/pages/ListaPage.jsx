import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { Container, Typography, Box } from '@mui/material';

const ListaPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('usuarios');
    if (dadosSalvos) {
      setUsers(JSON.parse(dadosSalvos));
    }
  }, []);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Usuários Cadastrados
        </Typography>
        <UserList users={users} />
      </Box>
    </Container>
  );
};

export default ListaPage;