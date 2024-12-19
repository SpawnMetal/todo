import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {TodoItem} from './component'
import {todo} from '@stores'

test('Component TodoItem', async () => {
  let todos
  let key
  const user = userEvent.setup()

  todos = todo.getTodo()
  expect(todos).toBeDefined()
  todo.addTodo('test')
  todos = todo.getTodo()
  key = Object.keys(todos)[0]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: 'test', isDone: false, keyTodo: key, key: key})

  render(<TodoItem {...todos[key]} />)

  const todoInput = screen.getByRole('textbox') as HTMLInputElement
  const isDoneButton = screen.getByRole('button')

  expect(todoInput).toBeInTheDocument()
  expect(isDoneButton).toBeInTheDocument()

  expect(todoInput).toHaveValue('test')

  // Посимвольный ввод
  await user.type(todoInput, '1')
  await user.type(todoInput, '2')
  todos = todo.getTodo()
  console.log(todos[key].value)
  expect(todoInput).toHaveValue('test12')

  // key = Object.keys(todos)[0]

  // expect(key).toBeDefined()
  // expect(todos[key]).toEqual({value: 'Hello!', isDone: false, keyTodo: key, key: key})

  // // Следующий разовый ввод и добавление по enter
  // await user.type(addInput, 'test')
  // expect(addInput).toHaveValue('test')
  // await user.keyboard('{enter}')
  // expect(addInput).toHaveValue('')

  // todos = todo.getTodo()
  // key = Object.keys(todos)[1]
  // expect(key).toBeDefined()
  // expect(todos[key]).toEqual({value: 'test', isDone: false, keyTodo: key, key: key})

  // // Разовый ввод и добавление по кнопке
  // await user.type(addInput, '123')
  // expect(addInput).toHaveValue('123')
  // await user.click(addButton)
  // expect(addInput).toHaveValue('')

  // todos = todo.getTodo()
  // key = Object.keys(todos)[2]
  // expect(key).toBeDefined()
  // expect(todos[key]).toEqual({value: '123', isDone: false, keyTodo: key, key: key})
})
