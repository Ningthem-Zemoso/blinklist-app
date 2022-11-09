import { MenuItem, MenuItemProps } from '@mui/material'
import React from 'react'


const MenuItemComponent: React.FC<MenuItemProps> = props => {
  const { value, children } = props
  return (
    <MenuItem
      value={value}
    >
      {children}
    </MenuItem>
  )
}

export default MenuItemComponent