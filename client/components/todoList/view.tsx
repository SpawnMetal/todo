import React, {useMemo} from 'react'
import {Box} from '@mui/material'
import {PropsView} from './interface'
import {InfiniteScroll, TodoItem, TodoItemProps} from '@components'

export const TodoListView = ({toggleMode, todo}: PropsView) => {
  const todoMemo = useMemo(
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
        .map(key => todo[key]),
    [todo, toggleMode],
  )

  return (
    <Box>
      <InfiniteScroll data={todoMemo} renderItem={(props: TodoItemProps) => <TodoItem {...props} />} />
    </Box>
  )
}
