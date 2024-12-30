import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import config from '@config'
config.mode = 'rtk' // Необходимо выставить мод перед @components
import {TodoAdd} from '@components'
import {getTodo, store} from '@stores'
import {Provider} from 'react-redux'

test('Component TodoAdd', async () => {
  let todos
  let key
  const user = userEvent.setup()

  render(
    <Provider store={store}>
      <TodoAdd />
    </Provider>,
  )

  const addInput = (await screen.findByRole('textbox')) as HTMLInputElement
  const addButton = await screen.findByRole('button')

  expect(addInput).toBeInTheDocument()
  expect(addButton).toBeInTheDocument()

  todos = getTodo(store.getState())
  expect(todos).toBeDefined()

  // // Добавление пустого значения
  await user.keyboard('{enter}')
  await user.click(addButton)
  expect(addInput).toHaveValue('')
  todos = getTodo(store.getState())
  expect(todos).toEqual({})

  // // Посимвольный ввод и добавление по enter
  await user.type(addInput, 'Hello!')
  expect(addInput).toHaveValue('Hello!')
  await user.keyboard('{enter}')
  expect(addInput).toHaveValue('')
  todos = getTodo(store.getState())
  key = Object.keys(todos)[0]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: 'Hello!', isDone: false, keyTodo: key, key: key})

  // // Посимвольный ввод и добавление по кнопке
  await user.type(addInput, '123')
  expect(addInput).toHaveValue('123')
  await user.click(addButton)
  expect(addInput).toHaveValue('')
  todos = getTodo(store.getState())
  key = Object.keys(todos)[1]
  expect(key).toBeDefined()
  expect(todos[key]).toEqual({value: '123', isDone: false, keyTodo: key, key: key})
})
