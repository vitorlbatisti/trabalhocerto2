import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Nenhum usuário cadastrado.</Typography>
      </Box>
    );
  }

  return (
    <List>
      {users.map((user, index) => (
        <ListItem key={index} divider>
          <ListItemText primary={user.nome} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;