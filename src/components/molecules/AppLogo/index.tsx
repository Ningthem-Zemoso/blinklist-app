import React from 'react'
import Logo from './Blinklist.png'
import { Box, BoxProps } from '@mui/material'
import { Link } from 'react-router-dom';

const AppLogo: React.FC<BoxProps> = props => {
  return (
    <Box
      sx={props.sx}
    >
      <Link to='/'>

        <img src={Logo} alt="" />
      </Link>

    </Box>
  )
}

export default AppLogo