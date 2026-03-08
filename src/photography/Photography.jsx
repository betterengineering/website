import React, { useState, useCallback, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const sectionHeaderSx = {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    mb: 2,
};

const descriptionSx = {
    color: '#333',
    fontSize: '0.9rem',
    lineHeight: 1.8,
    maxWidth: '720px',
};

const captionSx = {
    color: '#333',
    fontSize: '0.8rem',
    mt: 1.5,
    textAlign: 'center',
};

const frameOuterSx = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    border: '5px solid #111',
    boxShadow: '6px 6px 16px rgba(0,0,0,0.25), 2px 2px 6px rgba(0,0,0,0.15)',
    // Matte padding - generous white space like a real gallery matte
    p: { xs: 3, md: 4 },
};

const frameInnerSx = {
    width: '100%',
    border: '1px solid #ccc',
    lineHeight: 0,
    '& img': {
        width: '100%',
        height: 'auto',
        display: 'block',
        filter: 'grayscale(20%)',
    },
};

// Placeholder photos - replace src with actual photo paths
// Add your photos here: { src: '/photos/filename.jpg', description: 'Caption text' }
// Place image files in public/photos/
const photos = [
    { src: 'https://picsum.photos/seed/film1/800/600', description: 'Placeholder — replace with your photos' },
    { src: 'https://picsum.photos/seed/film2/800/600', description: 'Placeholder — replace with your photos' },
    { src: 'https://picsum.photos/seed/film3/800/600', description: 'Placeholder — replace with your photos' },
    { src: 'https://picsum.photos/seed/film4/800/600', description: 'Placeholder — replace with your photos' },
];

function Lightbox({ src, description, onClose }) {
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <Box
            onClick={onClose}
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(0,0,0,0.9)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
            }}
        >
            <Box
                component="img"
                src={src}
                alt={description}
                sx={{
                    maxWidth: '90vw',
                    maxHeight: '85vh',
                    objectFit: 'contain',
                }}
            />
            <Typography sx={{ color: '#ccc', fontSize: '0.85rem', mt: 2 }}>
                {description}
            </Typography>
        </Box>
    );
}

function FramedPhoto({ src, description, onClick }) {
    return (
        <Box sx={{ flex: '1 1 0', minWidth: 0 }}>
            <Box sx={{ ...frameOuterSx, cursor: 'pointer' }} onClick={onClick}>
                <Box sx={frameInnerSx}>
                    <img src={src} alt={description} />
                </Box>
            </Box>
            <Typography sx={captionSx}>{description}</Typography>
        </Box>
    );
}

function Photography() {
    const [lightboxPhoto, setLightboxPhoto] = useState(null);
    const closeLightbox = useCallback(() => setLightboxPhoto(null), []);

    // Group photos into rows of 2
    const rows = [];
    for (let i = 0; i < photos.length; i += 2) {
        rows.push(photos.slice(i, i + 2));
    }

    return (
        <Container maxWidth="md" sx={{ pt: 12, pb: 8 }}>
            {lightboxPhoto && (
                <Lightbox
                    src={lightboxPhoto.src}
                    description={lightboxPhoto.description}
                    onClose={closeLightbox}
                />
            )}
            <Typography variant="h4" sx={{ color: '#000', mb: 3, fontWeight: 'bold' }}>
                Photography
            </Typography>
            <Typography sx={descriptionSx}>
                I shoot analog film, almost exclusively black and white. There's something
                about the deliberate process of film photography — the patience of manual
                focus, the constraint of 36 frames, the anticipation of development — that
                makes each frame feel intentional. I develop and scan at home.
            </Typography>

            <Divider sx={{ my: 5, borderColor: '#ccc' }} />

            <Typography sx={{ ...sectionHeaderSx, mb: 4 }}>Gallery</Typography>

            {rows.map((row, i) => (
                <Box
                    key={i}
                    sx={{
                        display: 'flex',
                        gap: { xs: 3, md: 5 },
                        mb: 5,
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}
                >
                    {row.map((photo, j) => (
                        <FramedPhoto key={j} src={photo.src} description={photo.description} onClick={() => setLightboxPhoto(photo)} />
                    ))}
                    {/* If odd number, add empty spacer to maintain layout */}
                    {row.length === 1 && <Box sx={{ flex: '1 1 0', minWidth: 0 }} />}
                </Box>
            ))}

            {photos.length === 0 && (
                <Typography sx={{ color: '#999', fontStyle: 'italic' }}>
                    Photos coming soon.
                </Typography>
            )}

            <Typography sx={{ color: '#999', fontSize: '0.75rem', mt: 6, textAlign: 'center' }}>
                All photographs © Mark Spicer. All rights reserved.
            </Typography>
        </Container>
    );
}

export default Photography;
