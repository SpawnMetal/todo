import React from 'react'
import {TodoAdd, TodoList, TodoPanel} from '@components'
import {Typography} from '@mui/material'
import * as style from './style'

export const TodosView = () => {
  return (
    <>
      <Typography sx={style.title} variant="h1">
        todos
      </Typography>
      <TodoAdd />
      <TodoList />
      <TodoPanel />
    </>
  )
}
