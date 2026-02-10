import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHub from '@mui/icons-material/GitHub';
import Assignment from '@mui/icons-material/Assignment';
import CameraAlt from '@mui/icons-material/CameraAlt';
import Box from '@mui/material/Box';
import { LinkedIn } from '@mui/icons-material';
import { colors } from '../colors';



function Header({ variant }) {
    const isDark = variant === 'dark';
    const color = isDark ? colors.black : colors.teal;
    const bg = isDark ? colors.white : colors.darkBlue;

    return (
        <AppBar elevation={0} position="fixed" sx={{
            backgroundColor: bg,
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '24px',
                transform: 'translateY(100%)',
                background: `linear-gradient(to bottom, ${bg}, transparent)`,
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
                        color: color,
                        textDecoration: 'none',
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
                    style={{ color: color }}
                >
                    <Assignment />
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    component={RouterLink}
                    to="/photography"
                    aria-label="Photography"
                    style={{ color: color }}
                >
                    <CameraAlt />
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    href="https://www.linkedin.com/in/markspicerjr/"
                    aria-label="LinkedIn Profile"
                    style={{ color: color }}
                >
                    <LinkedIn />
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    href="https://github.com/betterengineering"
                    aria-label="GitHub Profile"
                    style={{ color: color }}
                >
                    <GitHub />
                </IconButton>
            </Toolbar>
        </AppBar >
    );
};

export default Header;
