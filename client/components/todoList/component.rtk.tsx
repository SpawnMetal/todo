import React, {useEffect} from 'react'
import {getTimerId, getTodo, getToggleMode, useAppDispatch, useAppSelector} from '@stores'
import {TodoListView} from './view'
import {updateSessionStorage} from '@helpers'

export const TodoList = () => {
  const dispatch = useAppDispatch()
  const toggleMode = useAppSelector(getToggleMode)
  const todo = useAppSelector(getTodo)
  const timerId = useAppSelector(getTimerId)

  useEffect(() => {
    updateSessionStorage(todo, timerId, dispatch)
  }, [todo])

  return <TodoListView toggleMode={toggleMode} todo={todo} />
}
