import React from 'react'
import {Props} from './interface'
import {BackdropView} from './view'

export const Backdrop = ({open}: Props) => {
  return <BackdropView open={open} />
}
