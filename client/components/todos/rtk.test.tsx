import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import config from '@config'
config.mode = 'rtk' // Необходимо выставить мод перед @components
import {Todos} from '@components'
import {Provider} from 'react-redux'
import {store} from '@stores'

test('Component Todos', async () => {
  const user = userEvent.setup()

  render(
    <Provider store={store}>
      <Todos />
    </Provider>,
  )

  // Добавляем задачи и проверяем текст с количеством выведенных задач в работе
  await waitFor(() => expect(screen.getByText(/0 items? left/i)).toBeInTheDocument())
  let inputs = screen.getAllByRole('textbox')
  await user.type(inputs[0], 'test1')
  await user.keyboard('{enter}')
  await waitFor(() => expect(screen.getByText(/1 item? left/i)).toBeInTheDocument())
  await user.type(inputs[0], 'test2')
  await user.keyboard('{enter}')
  await waitFor(() => expect(screen.getByText(/2 items? left/i)).toBeInTheDocument())
  await user.type(inputs[0], 'test3')
  await user.keyboard('{enter}')
  await waitFor(() => expect(screen.getByText(/3 items? left/i)).toBeInTheDocument())
  inputs = screen.getAllByRole('textbox')
  expect(inputs.length).toEqual(4) // Проверяем количество элементов

  // Количество выполненных задач
  const buttons = screen.getAllByRole('button')
  await user.click(buttons[1]) // Предполагается, что это кнопка завершения задачи
  await waitFor(() => expect(screen.getByText(/2 items? left/i)).toBeInTheDocument())
  const completedButton = screen.getByText('Completed')
  await user.click(completedButton)
  inputs = screen.getAllByRole('textbox')
  await waitFor(() => expect(inputs.length).toEqual(2))
  const activeButton = screen.getByText('Active')
  await user.click(activeButton)
  inputs = screen.getAllByRole('textbox')
  await waitFor(() => expect(inputs.length).toEqual(3))
  const allButton = screen.getByText('All')
  await user.click(allButton)
  inputs = screen.getAllByRole('textbox')
  await waitFor(() => expect(inputs.length).toEqual(4))
})
