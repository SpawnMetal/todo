import React from 'react'
import {observer} from 'mobx-react-lite'
import {Backdrop as Bdrop} from '@mui/material'
import * as style from './style'
import {Progress} from '@components'

interface Props {
  open: boolean
}

export const Backdrop = observer((props: Props) => {
  const {open} = props

  return (
    <Bdrop open={open} sx={style.backdrop}>
      <Progress />
    </Bdrop>
  )
})
