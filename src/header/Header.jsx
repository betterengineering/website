import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { colors } from '../colors';

const menuItems = [
    { label: 'Resume', to: '/resume' },
    { label: 'Photography', to: '/photography' },
];

function HamburgerIcon({ open, color }) {
    const barSx = {
        width: '24px',
        height: '2px',
        backgroundColor: color,
        transition: 'all 0.3s ease',
        transformOrigin: 'center',
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '24px', height: '20px', justifyContent: 'center' }}>
            <Box sx={{
                ...barSx,
                transform: open ? 'rotate(45deg) translate(2.5px, 2.5px)' : 'none',
            }} />
            <Box sx={{
                ...barSx,
                opacity: open ? 0 : 1,
            }} />
            <Box sx={{
                ...barSx,
                transform: open ? 'rotate(-45deg) translate(3.5px, -3.5px)' : 'none',
            }} />
        </Box>
    );
}

function Header({ variant = 'dark' }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const isLight = variant === 'light';
    const bg = isLight ? '#fff' : colors.darkBlue;
    const fg = isLight ? '#000' : colors.teal;
    const gradientTo = isLight ? 'rgba(255,255,255,0)' : 'transparent';

    const handleNavigation = (to) => {
        setOpen(false);
        navigate(to);
    };

    return (
        <>
            <AppBar elevation={0} position="fixed" sx={{
                backgroundColor: open ? colors.darkBlue : bg,
                transition: 'background-color 0.3s ease',
                zIndex: 1300,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '24px',
                    transform: 'translateY(100%)',
                    background: open ? 'transparent' : `linear-gradient(to bottom, ${bg}, ${gradientTo})`,
                    transition: 'background 0.3s ease',
                    pointerEvents: 'none',
                },
            }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        onClick={() => setOpen(false)}
                        sx={{
                            flexGrow: 1,
                            color: open ? colors.teal : fg,
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                        }}
                    >
                        Mark Spicer
                    </Typography>
                    <IconButton
                        onClick={() => setOpen(!open)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        sx={{ color: open ? colors.teal : fg, transition: 'color 0.3s ease' }}
                    >
                        <HamburgerIcon open={open} color={open ? colors.teal : fg} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Full-screen menu overlay */}
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: colors.darkBlue,
                zIndex: 1200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: open ? 1 : 0,
                pointerEvents: open ? 'auto' : 'none',
                transition: 'opacity 0.3s ease',
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    {menuItems.map((item, i) => (
                        <Typography
                            key={item.to}
                            onClick={() => handleNavigation(item.to)}
                            sx={{
                                color: colors.teal,
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                opacity: open ? 1 : 0,
                                transform: open ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.4s ease ${0.1 + i * 0.1}s, transform 0.4s ease ${0.1 + i * 0.1}s`,
                                '&:hover': {
                                    opacity: 0.7,
                                },
                            }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Header;
