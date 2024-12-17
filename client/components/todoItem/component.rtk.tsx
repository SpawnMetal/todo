import React from 'react'
import {Props} from './interface'
import {TodoItemView} from './view'
import {editTodo, setItemsLeft, setTodoDone, useAppDispatch} from '@stores'

export const TodoItem = ({isDone, value, keyTodo}: Props) => {
  const dispatch = useAppDispatch()

  const changeIsDone = () => {
    dispatch(setTodoDone({key: keyTodo, isDone: !isDone}))
    dispatch(setItemsLeft())
  }

  const handleOnChangeIsDone = () => changeIsDone()

  const handleOnChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editTodo({key: keyTodo, value: event.target.value}))
  }

  return <TodoItemView isDone={isDone} value={value} handleOnChangeIsDone={handleOnChangeIsDone} handleOnChangeText={handleOnChangeText} />
}
