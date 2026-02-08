import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Generative from './generative/Generative';
import Header from './header/Header';
import Resume from './resume/Resume';
import Photography from './photography/Photography';
import { colors } from './colors';

function Home() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: colors.darkBlue, height: window.innerHeight, width: 1 }}>
      <Header />
      <Container sx={{ height: 1, width: 1 }}>
        <Generative />
      </Container>
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
    <Box sx={{ flexGrow: 1, backgroundColor: colors.white, minHeight: '100vh', width: 1 }}>
      <Header variant="dark" />
      <Photography />
    </Box>
  );
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
