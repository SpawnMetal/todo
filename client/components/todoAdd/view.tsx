import React from 'react'
import {Box, IconButton} from '@mui/material'
import {InputBase} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import * as style from './style'
import {PropsView} from './interface'

export const TodoAddView = ({handleOnChangeAddTodo, handleOnKeyUpAddTodo, handleOnClickAddTodo, value}: PropsView) => {
  return (
    <Box sx={style.inputStyles}>
      <IconButton sx={style.inputIconWrapper} style={value.length ? style.isNotEmptyText : null} onClick={handleOnClickAddTodo}>
        <AddIcon />
      </IconButton>
      <InputBase sx={style.styledInputBase} value={value} placeholder="What needs to be done?" onKeyUp={handleOnKeyUpAddTodo} onChange={handleOnChangeAddTodo} />
    </Box>
  )
}
