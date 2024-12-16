import React from 'react'
import {observer} from 'mobx-react-lite'
import {todo} from '@stores'
import {TodoListView} from './view'

export const TodoList = observer(() => {
  return <TodoListView toggleMode={todo.getToggleMode()} todo={todo.getTodo()} />
})
