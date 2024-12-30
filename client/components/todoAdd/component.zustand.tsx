import React, {useEffect, useRef, useState} from 'react'
import {useTodoStore} from '@stores'
import {TodoAddView} from './view'

export const TodoAdd = () => {
  const {addTodo: setAddTodo, setItemsLeft, updateSessionStorage} = useTodoStore()
  const [value, setValue] = useState('')
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
    setAddTodo(value)
    setItemsLeft()
    updateSessionStorage()
    setValue('')
    inputRef.current.focus()
  }

  return <TodoAddView handleOnChangeAddTodo={handleOnChangeAddTodo} handleOnKeyUpAddTodo={handleOnKeyUpAddTodo} handleOnClickAddTodo={handleOnClickAddTodo} value={value} inputRef={inputRef} />
}
