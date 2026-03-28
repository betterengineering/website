import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Assignment from '@mui/icons-material/Assignment';
import CameraAlt from '@mui/icons-material/CameraAlt';
import Box from '@mui/material/Box';
import { colors } from '../colors';



function Header({ variant = 'dark' }) {
    const isLight = variant === 'light';
    const bg = isLight ? '#fff' : colors.darkBlue;
    const fg = isLight ? '#000' : colors.teal;
    const gradientTo = isLight ? 'rgba(255,255,255,0)' : 'transparent';

    return (
        <AppBar elevation={0} position="fixed" sx={{
            backgroundColor: bg,
            transition: 'background-color 0.3s ease',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '24px',
                transform: 'translateY(100%)',
                background: `linear-gradient(to bottom, ${bg}, ${gradientTo})`,
                transition: 'background 0.3s ease',
                pointerEvents: 'none',
            },
        }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        color: fg,
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                    }}
                >
                    Mark Spicer
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    size="large"
                    edge="end"
                    component={RouterLink}
                    to="/resume"
                    aria-label="Resume"
                    style={{ color: fg, transition: 'color 0.3s ease' }}
                >
                    <Assignment />
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    component={RouterLink}
                    to="/photography"
                    aria-label="Photography"
                    style={{ color: fg, transition: 'color 0.3s ease' }}
                >
                    <CameraAlt />
                </IconButton>
            </Toolbar>
        </AppBar >
    );
};

export default Header;
