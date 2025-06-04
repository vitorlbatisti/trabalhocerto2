import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserForm = ({ onAddUser }) => {
  const [user, setUser] = useState({ nome: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.nome.trim() === '' || user.email.trim() === '') return;
    onAddUser(user);
    setUser({ nome: '', email: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <TextField
        label="Nome"
        name="nome"
        value={user.nome}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={user.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Cadastrar
      </Button>
    </Box>
  );
};

export default UserForm;