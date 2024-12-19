import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {TodoAdd} from './component'
import {todo} from '@stores'

test('Component TodoAdd', async () => {
  let todos
  let key
  const user = userEvent.setup()

  render(<TodoAdd />)

  const addInput = screen.getByRole('textbox') as HTMLInputElement
  const addButton = screen.getByRole('button')

  expect(addInput).toBeInTheDocument()
  expect(addButton).toBeInTheDocument()

  todos = todo.getTodo()
  expect(todos).toBeDefined()

  // Добавление пустого значения
  await user.keyboard('{enter}')
  await user.click(addButton)
  expect(addInput).toHaveValue('')
  todos = todo.getTodo()
  expect(todos).toEqual({})

  // Посимвольный ввод и добавление по enter
  await user.type(addInput, 'H')
  await user.type(addInput, 'e')
  await user.type(addInput, 'l')
  await user.type(addInput, 'l')
  await user.type(addInput, 'o')
  await user.type(addInput, '!')
  expect(addInput).toHaveValue('Hello!')
  await user.keyboard('{enter}')
  expect(addInput).toHaveValue('')
  todos = todo.getTodo()
  key = Object.keys(todos)[0]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: 'Hello!', isDone: false, keyTodo: key, key: key})

  // Следующий разовый ввод и добавление по enter
  await user.type(addInput, 'test')
  expect(addInput).toHaveValue('test')
  await user.keyboard('{enter}')
  expect(addInput).toHaveValue('')
  todos = todo.getTodo()
  key = Object.keys(todos)[1]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: 'test', isDone: false, keyTodo: key, key: key})

  // Разовый ввод и добавление по кнопке
  await user.type(addInput, '123')
  expect(addInput).toHaveValue('123')
  await user.click(addButton)
  expect(addInput).toHaveValue('')
  todos = todo.getTodo()
  key = Object.keys(todos)[2]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: '123', isDone: false, keyTodo: key, key: key})
})
