import React, {useEffect, useRef} from 'react'
import {TodoAddView} from './view'
import {addTodo as setAddTodo, setItemsLeft, useAppDispatch} from '@stores'

export const TodoAdd = () => {
  const dispatch = useAppDispatch()
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
    dispatch(setAddTodo(value))
    dispatch(setItemsLeft())
    setValue('')
    inputRef.current.focus()
  }

  return <TodoAddView handleOnChangeAddTodo={handleOnChangeAddTodo} handleOnKeyUpAddTodo={handleOnKeyUpAddTodo} handleOnClickAddTodo={handleOnClickAddTodo} value={value} inputRef={inputRef} />
}
