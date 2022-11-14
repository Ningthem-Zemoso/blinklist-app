import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const SearchBoxComponent: React.FC = props => {
  return (
    <IconButton>
      <SearchIcon />
    </IconButton>
  )
}

export default SearchBoxComponent;