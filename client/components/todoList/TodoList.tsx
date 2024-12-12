import React, {useMemo} from 'react'
import {observer} from 'mobx-react-lite'
import {Box} from '@mui/material'
import {TodoItem} from '../todoItem/TodoItem'
import {store} from '@stores'

interface Props {
  value: string
  isDone: boolean
  keyTodo: string
}

const TodoItemMemo = React.memo(({value, isDone, keyTodo}: Props) => <TodoItem value={value} isDone={isDone} keyTodo={keyTodo} />)

export const TodoList = observer(() => {
  const todo = useMemo(() => Object.keys(store.todo).map(key => <TodoItemMemo value={store.todo[key].value} isDone={store.todo[key].isDone} key={key} keyTodo={key} />), [store.todo])

  return <Box>{todo}</Box>
})
