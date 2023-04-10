import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const pages = [
    { title: 'Get your list', url: '/createReceip' },
    { title: 'Latest recipes', url: '/recipes' },
];

const NavBar = () => {
    return (
        <AppBar position="absolute">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ padding: '0 3% 0 0' }}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                        }}
                    >
                        {
                            <Button
                                key={pages[0].title}
                                href={pages[0].url}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                style={{ padding: '6px 20px' }}
                            >
                                {pages[0].title}
                            </Button>
                        }
                    </Box>
                    <FoodBankIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LISTER
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {
                            <Button
                                key={pages[1].title}
                                href={pages[1].url}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {pages[1].title}
                            </Button>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
