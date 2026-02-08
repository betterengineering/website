import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHub from '@mui/icons-material/GitHub';
import Assignment from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import { LinkedIn } from '@mui/icons-material';
import { colors } from '../colors';
import Tooltip from '@mui/material/Tooltip';



function Header() {
    return (
        <AppBar elevation={0} position="fixed" sx={{
            backgroundColor: colors.darkBlue,
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '24px',
                transform: 'translateY(100%)',
                background: `linear-gradient(to bottom, ${colors.darkBlue}, transparent)`,
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
                        color: colors.teal,
                        textDecoration: 'none',
                    }}
                >
                    Mark Spicer
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip title="Resume" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        component={RouterLink}
                        to="/resume"
                        style={{ color: colors.teal }}
                    >
                        <Assignment />
                    </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn Profile" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        href="https://www.linkedin.com/in/markspicerjr/"
                        style={{ color: colors.teal }}
                    >
                        <LinkedIn />
                    </IconButton>
                </Tooltip>
                <Tooltip title="GitHub Profile" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        href="https://github.com/betterengineering"
                        style={{ color: colors.teal }}
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar >
    );
};

export default Header;
