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
// Add your photos here: { src: '/photos/filename.jpg', description: 'Caption text', span: 1 }
// Place image files in public/photos/
// span: 1 = single column, 2 = double wide, 3 = full width (out of 3 columns)
const photos = [
    { src: '/photos/gallery-1.jpg', description: 'Astoria Pool shot on Ilford HP5 Plus. This is from the first roll I developed and scanned myself 🤓', span: 1 },
    { src: '/photos/gallery-2.jpg', description: 'Red Hook Dock, Kodak TMax 400', span: 1 },
    { src: '/photos/gallery-3.jpg', description: 'Green-Wood Cemetery, Kodak Gold 200', span: 1 },
    { src: '/photos/gallery-7.jpg', description: 'Anable Basin, Kodak Portra 800', span: 3 },
    { src: '/photos/gallery-8.jpg', description: '18th Street between 5th and 6th, or thereabouts, Ilford HP5 Plus', span: 2 },
    { src: '/photos/gallery-5.jpg', description: 'Camp St Malo Cathedral. Ilford HP5 Plus', span: 1 },
    { src: '/photos/gallery-4.jpg', description: 'New York Times Building, Ilford HP5 Plus', span: 1 },
    { src: '/photos/gallery-9.jpg', description: 'Joshua Tree National Park, right as the sun was setting. Ilford HP5 Plus', span: 1 },
    { src: '/photos/gallery-6.jpg', description: 'Arches National Park. Fujifilm 400', span: 1 },
];

const arrowSx = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    fontSize: '3rem',
    cursor: 'pointer',
    userSelect: 'none',
    opacity: 0.7,
    transition: 'opacity 0.2s',
    '&:hover': { opacity: 1 },
    px: 2,
    py: 4,
};

function Lightbox({ index, onClose, onPrev, onNext }) {
    const photo = photos[index];

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose, onPrev, onNext]);

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
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                sx={{ ...arrowSx, left: { xs: 4, md: 24 } }}
            >
                ‹
            </Box>
            <Box
                component="img"
                src={photo.src}
                alt={photo.description}
                sx={{
                    maxWidth: '80vw',
                    maxHeight: '85vh',
                    objectFit: 'contain',
                }}
            />
            <Typography sx={{ color: '#ccc', fontSize: '0.85rem', mt: 2 }}>
                {photo.description}
            </Typography>
            <Box
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                sx={{ ...arrowSx, right: { xs: 4, md: 24 } }}
            >
                ›
            </Box>
        </Box>
    );
}

function FramedPhoto({ src, description, onClick, span = 1 }) {
    return (
        <Box sx={{ gridColumn: { xs: 'span 1', sm: `span ${Math.min(span, 2)}`, md: `span ${span}` } }}>
            <Box sx={{ ...frameOuterSx, cursor: 'pointer' }} onClick={onClick}>
                <Box sx={frameInnerSx}>
                    <img src={src} alt={description} />
                </Box>
            </Box>
        </Box>
    );
}

function Photography() {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const goPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length), []);
    const goNext = useCallback(() => setLightboxIndex((i) => (i + 1) % photos.length), []);

    return (
        <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
            {lightboxIndex !== null && (
                <Lightbox
                    index={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={goPrev}
                    onNext={goNext}
                />
            )}
            <Typography variant="h4" sx={{ color: '#000', mb: 3, fontWeight: 'bold' }}>
                Analog Photography
            </Typography>
            <Typography sx={descriptionSx}>
                {"I'm a hobbyist photographer shooting 35mm and medium format film. My main camera is a Nikon F3 from 1986, but I can also be found with a Rolleicord III from 1951 or a Kodak S Series from 1993. I've developed, scanned, and enlarged some photos in a darkroom myself but I typically rely on a lab. If you want to chat photography, use my images, or offer feedback you can email me at "}<Box component="a" href="mailto:mark@markspicer.me" sx={{ color: '#333' }}>mark@markspicer.me</Box>.
            </Typography>

            <Divider sx={{ my: 5, borderColor: '#ccc' }} />

            <Typography sx={{ ...sectionHeaderSx, mb: 4 }}>Gallery</Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gridAutoFlow: 'dense',
                alignItems: 'start',
                gap: 3,
            }}>
                {photos.map((photo, i) => (
                    <FramedPhoto key={i} src={photo.src} description={photo.description} span={photo.span} onClick={() => setLightboxIndex(i)} />
                ))}
            </Box>

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
