import React from 'react'
import {useTodoStore} from '@stores'
import {TodoListView} from './view'

export const TodoList = () => {
  const {getToggleMode, getTodo} = useTodoStore()

  return <TodoListView toggleMode={getToggleMode()} todo={getTodo()} />
}
