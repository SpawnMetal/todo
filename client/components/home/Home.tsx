import React from 'react'
import {observer} from 'mobx-react-lite'
import {Todos} from '@components'
import {store} from '@stores'
import {Box} from '@mui/material'
import * as style from './style'

export const Home = observer(() => {
  return (
    <Box sx={style.home}>
      <Box sx={style.todo}>{store.isRequestStatusSuccess && <Todos />}</Box>
    </Box>
  )
})
