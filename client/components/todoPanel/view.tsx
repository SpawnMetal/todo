import React from 'react'
import {Box} from '@mui/material'
import * as style from './style'
import {ClearCompleted, ItemsLeft, ItemsToggle} from '@components'

export const TodoPanelView = () => {
  return (
    <Box sx={style.panelMain}>
      <ItemsLeft />
      <ItemsToggle />
      <ClearCompleted />
    </Box>
  )
}
