import React from 'react';
import { Box } from '@mui/material';
import FooterComponent from '../../organisms/Footer';
import HeaderComponent from '../../organisms/Header';

interface Props {
  children: React.ReactNode
}

const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Box width="70%" sx={{ margin: '0 auto' }}>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Box>
  )
}

export default MainTemplate;