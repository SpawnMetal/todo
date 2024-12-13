import React from 'react'
import {observer} from 'mobx-react-lite'
import {Box} from '@mui/material'
import * as style from './style'
import {ClearCompleted, ItemsLeft, ItemsToggle} from '@components'

export const TodoPanel = observer(() => {
  return (
    <Box sx={style.panelMain}>
      <ItemsLeft />
      <ItemsToggle />
      <ClearCompleted />
    </Box>
  )
})
