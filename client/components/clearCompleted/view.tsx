import React from 'react'
import {Button, Typography} from '@mui/material'
import * as style from './style'
import {PropsView} from './interface'

export const ClearCompletedView = ({handleOnClear}: PropsView) => {
  return (
    <Button sx={style.clearCompleted} variant="text" onClick={handleOnClear}>
      <Typography>Clear completed</Typography>
    </Button>
  )
}
