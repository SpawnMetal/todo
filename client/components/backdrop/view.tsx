import React from 'react'
import {Backdrop as Bdrop} from '@mui/material'
import * as style from './style'
import {Progress} from '@components'
import {PropsView} from './interface'

export const BackdropView = ({open}: PropsView) => {
  return (
    <Bdrop open={open} sx={style.backdrop}>
      <Progress />
    </Bdrop>
  )
}
