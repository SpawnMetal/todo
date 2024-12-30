import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import config from '@config'
config.mode = 'zustand' // Необходимо выставить мод перед @components
import {TodoList} from '@components'
import {useTodoStore} from '@stores'

test('Component TodoList', async () => {
  let todos
  let key
  const user = userEvent.setup()
  const {getTodo, addTodo} = useTodoStore.getState()

  todos = getTodo()
  expect(todos).toBeDefined()
  addTodo('test')
  todos = getTodo()
  key = Object.keys(todos)[0]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: 'test', isDone: false, keyTodo: key, key: key})

  render(<TodoList {...todos[key]} />)

  const todoInput = (await screen.findByRole('textbox')) as HTMLInputElement
  const isDoneButton = await screen.findByRole('button')
  const iconNotIsDone = screen.getByTestId('CircleOutlinedIcon')

  expect(todoInput).toBeInTheDocument()
  expect(isDoneButton).toBeInTheDocument()
  expect(iconNotIsDone).toBeInTheDocument()

  expect(todoInput).toHaveValue('test')

  // Посимвольное редактирование текста задачи
  await user.type(todoInput, '123')
  expect(todoInput).toHaveValue('test123')

  await user.click(isDoneButton)
  const iconIsDone = screen.getByTestId('CheckCircleOutlineIcon')
  expect(iconIsDone).toBeInTheDocument()

  todos = getTodo()
  expect(todos[key]).toEqual({value: 'test123', isDone: true, keyTodo: key, key: key})
})
