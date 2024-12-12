import React from 'react'
import {observer} from 'mobx-react-lite'
import {TodoAdd} from '../todoAdd/TodoAdd'
import {TodoList} from '../todoList/TodoList'
import {TodoPanel} from '../todoPanel/TodoPanel'
import {Typography} from '@mui/material'
import * as style from './style'

export const Todos = observer(() => {
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
})
