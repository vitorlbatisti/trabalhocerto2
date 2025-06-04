import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import { Container, Typography, Box } from '@mui/material';

const CadastroPage = () => {
  // Ler do localStorage ao montar componente
  const [users, setUsers] = useState(() => {
    const dadosSalvos = localStorage.getItem('usuarios');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  // Função para adicionar novo usuário
  const addUser = (novoUser) => {
    const atualizados = [...users, novoUser];
    setUsers(atualizados);
    localStorage.setItem('usuarios', JSON.stringify(atualizados));
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Usuários
        </Typography>
        <UserForm onAddUser={addUser} />
      </Box>
    </Container>
  );
};

export default CadastroPage;
