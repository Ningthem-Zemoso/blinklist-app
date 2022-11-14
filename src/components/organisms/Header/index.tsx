import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
} from '@mui/material';
import AppLogo from '../../molecules/AppLogo';
import SearchComponent from '../Search';
import HeadingNavsComponent from '../../molecules/HeadingNavs';
import AddBookButton from '../../molecules/AddBookButton'
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props {

}
const HeaderComponent: React.FC<Props> = props => {
  return (
    <AppBar position='static' color='transparent' sx={{ boxShadow: 0, m: '15px 0 35px 0' }}>
      <Container maxWidth='xl'>

        <Box display="flex" sx={{ float: 'left', py: 1, alignItems: "center" }}>
          <Stack direction="row" spacing={3}>
            <AppLogo sx={{m: 'auto'}}/>
            <SearchComponent />
            <HeadingNavsComponent endIcon={<ExpandMoreIcon />}>Explore</HeadingNavsComponent>
            <HeadingNavsComponent href='/'>My Library</HeadingNavsComponent>
          </Stack>


        </Box>


        <Box display="flex" sx={{ float: 'right', py: 1, alignItems: "center" }}>
          <Stack direction="row" spacing={3} >
            <AddBookButton />
            <Avatar sx={{ bgcolor: '#69A5E3', mx: 0 }}>A</Avatar>
          </Stack>
          <ExpandMoreIcon sx={{ m: 0 }} />
        </Box>

      </Container>
    </AppBar>
  )
}

export default HeaderComponent