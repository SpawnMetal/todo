import {InputBase} from '@mui/material'
import React from 'react'

export const Test = () => {
  const [value, setValue] = React.useState('')
  const handleOnChangeAddTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return <InputBase value={value} placeholder="What needs to be done?" onChange={handleOnChangeAddTodo} />
}
