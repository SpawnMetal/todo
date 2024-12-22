import React, {useEffect, useRef} from 'react'
import {observer} from 'mobx-react-lite'
import {todo} from '@stores'
import {TodoAddView} from './view'

export const TodoAdd = observer(() => {
  const [value, setValue] = React.useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

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
    todo.addTodo(value)
    todo.setItemsLeft()
    todo.updateSessionStorage()
    setValue('')
    inputRef.current.focus()
  }

  return <TodoAddView handleOnChangeAddTodo={handleOnChangeAddTodo} handleOnKeyUpAddTodo={handleOnKeyUpAddTodo} handleOnClickAddTodo={handleOnClickAddTodo} value={value} inputRef={inputRef} />
})
