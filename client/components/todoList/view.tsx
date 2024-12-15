import React, {useMemo} from 'react'
import {Box} from '@mui/material'
import {PropsView, TodoItemMemoProps} from './interface'
import {TodoItem} from '@components'

const TodoItemMemo = React.memo(({value, isDone, keyTodo}: TodoItemMemoProps) => <TodoItem value={value} isDone={isDone} keyTodo={keyTodo} />)

export const TodoListView = ({toggleMode, todo}: PropsView) => {
  const Todo = useMemo(
    () =>
      Object.keys(todo)
        .filter(key => {
          if (toggleMode === 'active') {
            return !todo[key].isDone
          } else if (toggleMode === 'completed') {
            return todo[key].isDone
          }

          return true
        })
        .map(key => <TodoItemMemo value={todo[key].value} isDone={todo[key].isDone} key={key} keyTodo={key} />),
    [todo, toggleMode],
  )

  return <Box>{Todo}</Box>
}
