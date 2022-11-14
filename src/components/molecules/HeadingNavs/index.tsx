import React from 'react'
import ButtonComponent from '../../atoms/Button';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  href?: string
}

const HeadingNavsComponent: React.FC<Props> = props => {
  const { children, startIcon, endIcon, href = '#' } = props
  return (
    <Link to={href}>
      <ButtonComponent
        size='medium'
        sx={{ color: '#03314B', textTransform: 'capitalize', fontSize: 17, fontWeight: 'bold' }}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {props.children}
      </ButtonComponent>
    </Link>
  )
}

export default HeadingNavsComponent