import React from 'react'
import {observer} from 'mobx-react-lite'
import {todo} from '@stores'
import {Props} from './interface'
import {TodoItemView} from './view'

export const TodoItem = observer(({isDone, value, keyTodo}: Props) => {
  const changeIsDone = () => {
    todo.setTodoDone(keyTodo, !isDone)
    todo.setItemsLeft()
    todo.updateSessionStorage()
  }

  const handleOnChangeIsDone = () => changeIsDone()

  const handleOnChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    todo.editTodo(keyTodo, event.target.value)
    todo.updateSessionStorage()
  }

  return <TodoItemView isDone={isDone} value={value} handleOnChangeIsDone={handleOnChangeIsDone} handleOnChangeText={handleOnChangeText} />
})
