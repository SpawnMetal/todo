import React from 'react'
import {observer} from 'mobx-react-lite'
import {store} from '@stores'
import {Props} from './interface'
import {TodoItemView} from './view'

export const TodoItem = observer(({isDone, value, keyTodo}: Props) => {
  const changeIsDone = () => {
    store.setTodoDone(keyTodo, !isDone)
    store.setItemsLeft()
  }

  const handleOnChangeIsDone = () => changeIsDone()

  const handleOnChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.editTodo(keyTodo, event.target.value)
  }

  return <TodoItemView isDone={isDone} value={value} handleOnChangeIsDone={handleOnChangeIsDone} handleOnChangeText={handleOnChangeText} />
})
