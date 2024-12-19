import React from 'react'
import {Box, IconButton} from '@mui/material'
import {InputBase} from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import * as style from './style'
import {PropsView} from './interface'

export const TodoItemView = ({isDone, value, handleOnChangeIsDone, handleOnChangeText}: PropsView) => {
  return (
    <Box sx={style.inputStyles}>
      <IconButton sx={style.inputIconWrapper} style={isDone ? style.isDone : null} onClick={handleOnChangeIsDone}>
        {isDone ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
      </IconButton>
      <InputBase sx={style.styledInputBase} style={isDone ? style.isDoneText : null} value={value} onChange={handleOnChangeText} />
    </Box>
  )
}
