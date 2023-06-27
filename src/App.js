import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Generative from './generative/Generative';
import Header from './header/Header';
import { colors } from './colors';

function App() {
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
