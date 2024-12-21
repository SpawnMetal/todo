import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Todos} from '@components'
import {todo} from '@stores'

test('Component Todos', async () => {
  let todos
  let key
  const user = userEvent.setup()

  render(<Todos />)

  // todos = todo.getTodo()
  // console.log(todos[Object.keys(todos)[0]].value)
  // console.log(todos[Object.keys(todos)[1]].value)
  // console.log(todos[Object.keys(todos)[2]]?.value)
  // console.log(todos)

  // expect(todos).toBeDefined()

  await waitFor(async () => {
    // Добавляем задачи и проверяем текст с количеством выведенных задач в работе
    let text = screen.getByText(/0 items? left/i)
    expect(text).toBeInTheDocument()
    let inputs = screen.getAllByRole('textbox')
    await user.type(inputs[0], 'test1')
    await user.keyboard('{enter}')
    text = screen.getByText(/1 item? left/i)
    expect(text).toBeInTheDocument()
    await user.type(inputs[0], 'test2')
    await user.keyboard('{enter}')
    text = screen.getByText(/2 items? left/i)
    expect(text).toBeInTheDocument()
    await user.type(inputs[0], 'test3')
    await user.keyboard('{enter}')
    text = screen.getByText(/3 items? left/i)
    expect(text).toBeInTheDocument()
    inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toEqual(4) // Проверяем количество элементов

    // Количество выполненных задач
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[1])
    text = screen.getByText(/2 items? left/i)
    expect(text).toBeInTheDocument()
    const conpletedButton = screen.getByText('Completed')
    await user.click(conpletedButton)
    inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toEqual(2)
    const activeButton = screen.getByText('Active')
    await user.click(activeButton)
    inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toEqual(3)
    const allButton = screen.getByText('All')
    await user.click(allButton)
    inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toEqual(4)
  })
})
