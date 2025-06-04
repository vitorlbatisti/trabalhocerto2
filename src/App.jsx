import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import ListaPage from './pages/ListaPage';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Cadastro
          </Button>
          <Button color="inherit" component={Link} to="/lista">
            Usuários
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<CadastroPage />} />
          <Route path="/lista" element={<ListaPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;