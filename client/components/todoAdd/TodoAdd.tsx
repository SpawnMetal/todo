import React from 'react'
import {observer} from 'mobx-react-lite'
import {Box} from '@mui/material'
import {InputBase} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import * as style from './style'
import {store} from '@stores'

export const TodoAdd = observer(() => {
  const [value, setValue] = React.useState('')

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
    store.addTodo(value)
    store.setItemsLeft()
    setValue('')
  }

  return (
    <Box sx={style.inputStyles}>
      <Box sx={style.inputIconWrapper} style={value.length ? style.isNotEmptyText : null} onClick={handleOnClickAddTodo}>
        <AddIcon />
      </Box>
      <InputBase sx={style.styledInputBase} value={value} placeholder="What needs to be done?" onKeyUp={handleOnKeyUpAddTodo} onChange={handleOnChangeAddTodo} />
    </Box>
  )
})
