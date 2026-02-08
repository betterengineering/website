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
import Tooltip from '@mui/material/Tooltip';



function Header({ dark }) {
    const iconColor = dark ? colors.black : colors.teal;

    return (
        <AppBar elevation={0} position="fixed" color="transparent">
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        color: iconColor,
                        textDecoration: 'none',
                    }}
                >
                    Mark Spicer
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip title="Photography" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        component={RouterLink}
                        to="/photography"
                        style={{ color: iconColor }}
                    >
                        <CameraAlt />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Resume" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        component={RouterLink}
                        to="/resume"
                        style={{ color: iconColor }}
                    >
                        <Assignment />
                    </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn Profile" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        href="https://www.linkedin.com/in/markspicerjr/"
                        style={{ color: iconColor }}
                    >
                        <LinkedIn />
                    </IconButton>
                </Tooltip>
                <Tooltip title="GitHub Profile" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        href="https://github.com/betterengineering"
                        style={{ color: iconColor }}
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar >
    );
};

export default Header;
