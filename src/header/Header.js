import React from 'react';

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
        <AppBar elevation={0} position="fixed" color="transparent">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: colors.teal }}>
                    Mark Spicer
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip title="Resume" placement="bottom">
                    <IconButton
                        size="large"
                        edge="end"
                        href="https://betterengineering.notion.site/betterengineering/Mark-Spicer-aa37072963ce46a583b477aeca9ef73b"
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
