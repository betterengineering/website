import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import { LinkedIn } from '@mui/icons-material';

import Generative from './generative/Generative';
import Header from './header/Header';
import Resume from './resume/Resume';
import Photography from './photography/Photography';
import { colors } from './colors';

function Home() {
  const aboutRef = useRef(null);
  const [headerVariant, setHeaderVariant] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      setHeaderVariant(aboutTop <= 64 ? 'light' : 'dark');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ backgroundColor: colors.darkBlue, width: 1 }}>
      <Box sx={{ height: '100vh', width: 1 }}>
        <Header variant={headerVariant} />
        <Container sx={{ height: 1, width: 1 }}>
          <Generative />
        </Container>
      </Box>

      <Box ref={aboutRef} sx={{ width: 1, py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="md">
          <Box sx={{
            display: 'flex',
            gap: 6,
            alignItems: 'flex-start',
            flexDirection: { xs: 'column', md: 'row' },
          }}>
            <Box
              component="img"
              src="/assets/profile.jpg"
              alt="Mark Spicer"
              sx={{
                width: { xs: '100%', md: '33%' },
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: colors.black, fontSize: '1.5rem', fontWeight: 'bold', mb: 2 }}>
                About
              </Typography>
              <Typography sx={{ color: colors.black, opacity: 0.85, fontSize: '1rem', lineHeight: 1.8 }}>
                Hi there! So glad you found your way here ❤️. Professionally, I am a software engineer with a decade of experience. Outside of work, I am currently exploring what it means to be a parent.  I am really happy in the kitchen cooking, capturing the world through photography, or getting some sun on my bike. I'd love to chat about basically anything, hit me up through one of the channels below 👇.
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
                <IconButton
                  href="https://github.com/betterengineering"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub Profile"
                  sx={{ color: colors.black }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/markspicerjr/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn Profile"
                  sx={{ color: colors.black }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="mailto:mark@markspicer.me"
                  aria-label="Email"
                  sx={{ color: colors.black }}
                >
                  <Email />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function ResumePage() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: colors.darkBlue, minHeight: '100vh', width: 1 }}>
      <Header />
      <Resume />
    </Box>
  );
}

function PhotographyPage() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#fff', minHeight: '100vh', width: 1 }}>
      <Header variant="light" />
      <Photography />
    </Box>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const bannerStyle = `
      color: ${colors.darkBlue};
    `;

    const infoStyle = `
      color: ${colors.teal};
      background: ${colors.darkBlue};
      padding: 8px 16px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;
      margin: 0px 4px 0px 0px;
    `;

    const linkStyle = `
      background: ${colors.teal};
      padding: 8px 16px;
      margin: 4px 0px 0px 0px;
      font-size: 12px;
      font-weight: bold;
      border-radius: 4px;
    `;

    const banner = `
  ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗██╗
  ████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝██║
  ██╔████╔██║███████║██████╔╝█████╔╝ ██║
  ██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗ ╚═╝
  ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗██╗
  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ `;

    console.log(`%c${banner}`, bannerStyle);
    console.log('%cHere for the source? %chttps://github.com/betterengineering/website', infoStyle, linkStyle);

  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
