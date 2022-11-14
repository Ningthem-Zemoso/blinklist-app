import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import { styled } from '@mui/system';

const HeaderStyled = styled(TypographyComponent)(({ theme }) => ({
  marginBottom: 45,
  color: theme.palette.textColor.text2
}))



const PageHeaderComponent: React.FC<{ name: string }> = props => {
  return (
    <HeaderStyled
      variant='heading1'
      paragraph
    >
      {props.name}
    </HeaderStyled>
  )
}

export default PageHeaderComponent;