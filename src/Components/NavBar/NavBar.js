import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const NavBar = () => {
    return (
        <AppBar>
            <Toolbar disableGutters style={{ justifyContent: 'center' }}>
                <FoodBankIcon />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LISTER
                </Typography>
                <Button
                    key={'Get your list'}
                    href={'/createRecipe'}
                    sx={{ color: 'white' }}
                >
                    Get your list
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
