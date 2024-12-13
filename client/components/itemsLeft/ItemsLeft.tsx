import React from 'react'
import {observer} from 'mobx-react-lite'
import {Typography} from '@mui/material'
import {store} from '@stores'

export const ItemsLeft = observer(() => {
  return (
    <Typography>
      {store.getItemsLeft()} item{store.getItemsLeft() !== 1 && 's'} left
    </Typography>
  )
})
