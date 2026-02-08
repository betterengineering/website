import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { colors } from '../colors';

const sectionHeaderSx = {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    mb: 2,
};

const dividerSx = {
    borderColor: colors.black,
    opacity: 0.2,
    my: 4,
};

const captionSx = {
    color: colors.black,
    opacity: 0.7,
    fontSize: '0.8rem',
    mt: 1.5,
    textAlign: 'center',
    lineHeight: 1.5,
};

const frameSx = {
    backgroundColor: colors.white,
    border: `5px solid ${colors.black}`,
    boxShadow: '6px 6px 20px rgba(0, 0, 0, 0.3), 2px 2px 6px rgba(0, 0, 0, 0.15)',
    // Matte padding: more on bottom like a real gallery matte
    padding: '24px 24px 32px 24px',
};

const photos = [
    {
        src: '/photos/placeholder-1.jpg',
        alt: 'Untitled',
        caption: 'Untitled',
    },
    {
        src: '/photos/placeholder-2.jpg',
        alt: 'Untitled',
        caption: 'Untitled',
    },
    {
        src: '/photos/placeholder-3.jpg',
        alt: 'Untitled',
        caption: 'Untitled',
    },
    {
        src: '/photos/placeholder-4.jpg',
        alt: 'Untitled',
        caption: 'Untitled',
    },
];

function PhotoFrame({ src, alt, caption }) {
    return (
        <Box>
            <Box sx={frameSx}>
                <Box
                    component="img"
                    src={src}
                    alt={alt}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        backgroundColor: '#e0e0e0',
                        // Fallback aspect ratio for missing images
                        minHeight: '200px',
                    }}
                />
            </Box>
            <Typography sx={captionSx}>{caption}</Typography>
        </Box>
    );
}

function Photography() {
    return (
        <Box sx={{
            backgroundColor: colors.white,
            minHeight: '100vh',
            width: 1,
            pt: 10,
            pb: 8,
        }}>
            <Container maxWidth="md">
                <Box sx={{ mb: 1 }}>
                    <Typography sx={{ color: colors.black, fontSize: '2rem', fontWeight: 'bold' }}>
                        Photography
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: colors.black, opacity: 0.85, fontSize: '0.9rem', lineHeight: 1.7 }}>
                        I shoot analog black and white film. There is something
                        meditative about the constraints of film — the finite
                        number of frames, the manual focus, the patience required
                        in the darkroom. I find the process as rewarding as the
                        results. Most of what I shoot is 35mm on a Canonet QL17,
                        developed and scanned at home.
                    </Typography>
                </Box>

                <Divider sx={dividerSx} />

                <Box sx={{ mb: 2 }}>
                    <Typography sx={sectionHeaderSx}>Gallery</Typography>
                </Box>

                <Box sx={{ px: { xs: 1, sm: 0 } }}>
                    <Grid container spacing={{ xs: 5, sm: 6 }}>
                        {photos.map((photo, index) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                <PhotoFrame
                                    src={photo.src}
                                    alt={photo.alt}
                                    caption={photo.caption}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Photography;
