import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {Test} from '@components'
// import {Mode} from '@components'
import * as dotenv from 'dotenv'

// test('should load MODE from environment', () => {
//   console.log(process.env.MODE)
//   expect(process.env.MODE).toBeDefined()
// })

test('loads and displays greeting', async () => {
  const user = userEvent.setup()

  render(<Test />)
  // render(<Mode />)

  const addInput = screen.getByPlaceholderText('What needs to be done?')

  await user.type(addInput, 'H')
  await user.type(addInput, 'e')
  await user.type(addInput, 'l')
  await user.type(addInput, 'l')
  await user.type(addInput, 'o')
  expect(addInput).toHaveValue('Hello')
  // await user.keyboard('{enter}')
})
