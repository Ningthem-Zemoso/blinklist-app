import React from 'react'
import { Box } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/system';

const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: 16
}))


const MinsToRead: React.FC<{ minsToRead: number }> = ({ minsToRead }) => {
  return (
    <BoxStyled>
      <AccessTimeIcon fontSize='small' color='disabled' />

      <TypographyComponent
        variant="caption1"
        color="text.secondary"
        sx={{ ml: 1 }}
      >
        {minsToRead}-minute read
      </TypographyComponent>
    </BoxStyled>
  )
}

export default MinsToRead;