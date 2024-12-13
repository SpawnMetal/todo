import React from 'react'
import {observer} from 'mobx-react-lite'
import {Box} from '@mui/material'
import {InputBase} from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import * as style from './style'
import {store} from '@stores'

interface Props {
  isDone: boolean
  value: string
  keyTodo: string
}

export const TodoItem = observer(({isDone, value, keyTodo}: Props) => {
  const changeIsDone = () => {
    store.setTodoDone(keyTodo, !isDone)
    store.setItemsLeft()
  }

  const handleOnChangeIsDone = () => changeIsDone()

  const handleOnChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.editTodo(keyTodo, event.target.value)
  }

  return (
    <Box sx={style.inputStyles}>
      <Box sx={style.inputIconWrapper} onClick={handleOnChangeIsDone}>
        {isDone ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
      </Box>
      <InputBase sx={style.styledInputBase} style={isDone ? style.isDoneText : null} value={value} onChange={handleOnChangeText} />
    </Box>
  )
})
