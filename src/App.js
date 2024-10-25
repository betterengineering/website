import React, { useEffect } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Generative from './generative/Generative';
import Header from './header/Header';
import { colors } from './colors';

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
    <Box sx={{ flexGrow: 1, backgroundColor: colors.darkBlue, height: window.innerHeight, width: 1 }}>
      <Header />
      <Container sx={{ height: 1, width: 1 }}>
        <Generative />
      </Container>
    </Box>
  );
}

export default App;
