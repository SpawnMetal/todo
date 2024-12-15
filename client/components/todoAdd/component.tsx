import React from 'react'
import {observer} from 'mobx-react-lite'
import {store} from '@stores'
import {TodoAddView} from './view'

export const TodoAdd = observer(() => {
  const [value, setValue] = React.useState('')

  const handleOnChangeAddTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleOnKeyUpAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.target instanceof HTMLInputElement && event.key === 'Enter' && addTodo()
  }

  const handleOnClickAddTodo = () => {
    addTodo()
  }

  const addTodo = () => {
    store.addTodo(value)
    store.setItemsLeft()
    setValue('')
  }

  return <TodoAddView handleOnChangeAddTodo={handleOnChangeAddTodo} handleOnKeyUpAddTodo={handleOnKeyUpAddTodo} handleOnClickAddTodo={handleOnClickAddTodo} value={value} />
})
