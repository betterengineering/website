import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Generative from './generative/Generative';
import Header from './header/Header';
import { colors } from './colors';

function App() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: colors.darkBlue }}>
      <Header />
      <Container>
        <Generative />
      </Container>
    </Box>
  );
}

export default App;
