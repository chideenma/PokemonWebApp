import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Pokémon App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/your-pokemon">Your Pokémon</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;