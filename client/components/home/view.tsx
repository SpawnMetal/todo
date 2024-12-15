import React from 'react'
import {Todos} from '@components'
import {Box} from '@mui/material'
import * as style from './style'
import {PropsView} from './interface'

export const HomeView = ({isRequestStatusSuccess}: PropsView) => {
  return (
    <Box sx={style.home}>
      <Box sx={style.todo}>{isRequestStatusSuccess && <Todos />}</Box>
    </Box>
  )
}
