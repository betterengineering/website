import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import '@fontsource/cutive-mono';

// A custom theme for this app
const theme = createTheme({
    palette: {
        background: {
            default: '#00203F',
        },
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            'Cutive Mono',
            'monospace',
        ].join(','),
    },
});

export default theme;