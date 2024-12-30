import React from 'react'
import {useTodoStore} from '@stores'
import {Props} from './interface'
import {TodoItemView} from './view'

export const TodoItem = ({isDone, value, keyTodo}: Props) => {
  const {setTodoDone, setItemsLeft, updateSessionStorage, editTodo} = useTodoStore()

  const changeIsDone = () => {
    setTodoDone(keyTodo, !isDone)
    setItemsLeft()
    updateSessionStorage()
  }

  const handleOnChangeIsDone = () => changeIsDone()

  const handleOnChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    editTodo(keyTodo, event.target.value)
    updateSessionStorage()
  }

  return <TodoItemView isDone={isDone} value={value} handleOnChangeIsDone={handleOnChangeIsDone} handleOnChangeText={handleOnChangeText} />
}
