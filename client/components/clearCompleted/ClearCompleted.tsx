import React from 'react'
import {observer} from 'mobx-react-lite'
import {Button, Typography} from '@mui/material'
import * as style from './style'
import {store} from '@stores'

export const ClearCompleted = observer(() => {
  const handleOnClear = () => store.clearCompleted()
  return (
    <Button sx={style.clearCompleted} variant="text" onClick={handleOnClear}>
      <Typography>Clear completed</Typography>
    </Button>
  )
})
