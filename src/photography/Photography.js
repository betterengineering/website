
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Add your photos here. Place image files in public/photography/ and reference them as shown.
const photos = [
    { src: '/photography/photo1.jpg', description: 'Description of photo' },
    { src: '/photography/photo2.jpg', description: 'Description of photo' },
    { src: '/photography/photo3.jpg', description: 'Description of photo' },
    { src: '/photography/photo4.jpg', description: 'Description of photo' },
];

const frameSx = {
    border: '3px solid #111',
    pt: 4,
    px: 4,
    pb: 5,
    backgroundColor: '#fafafa',
    boxShadow: '4px 6px 16px rgba(0,0,0,0.2)',
};

function PhotoFrame({ src, description }) {
    return (
        <Box>
            <Box sx={frameSx}>
                <Box
                    component="img"
                    src={src}
                    alt={description}
                    sx={{
                        width: '100%',
                        display: 'block',
                        aspectRatio: '3/2',
                        objectFit: 'cover',
                        backgroundColor: '#e0e0e0',
                    }}
                />
            </Box>
            <Typography sx={{ color: '#333', fontSize: '0.85rem', mt: 1.5, textAlign: 'center' }}>
                {description}
            </Typography>
        </Box>
    );
}

function Photography() {
    return (
        <Container maxWidth="md" sx={{ pt: 12, pb: 8 }}>
            <Typography variant="h4" sx={{ color: '#000', fontWeight: 'bold', mb: 3 }}>
                Photography
            </Typography>
            <Typography sx={{ color: '#333', fontSize: '1rem', lineHeight: 1.8, mb: 4, maxWidth: '600px' }}>
                I shoot analog, almost exclusively black and white. There's something
                about the process of film — the patience, the intention behind each
                frame, and the beauty of silver halide grain — that digital can't
                quite replicate.
            </Typography>

            <Divider sx={{ borderColor: '#ccc', mb: 6 }} />

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 6,
            }}>
                {photos.map((photo, index) => (
                    <PhotoFrame key={index} src={photo.src} description={photo.description} />
                ))}
            </Box>
        </Container>
    );
}

export default Photography;
