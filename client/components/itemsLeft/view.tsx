import React from 'react'
import {Typography} from '@mui/material'
import {PropsView} from './interface'

export const ItemsLeftView = ({itemsLeft}: PropsView) => {
  return (
    <Typography>
      {itemsLeft} item{itemsLeft !== 1 && 's'} left
    </Typography>
  )
}
