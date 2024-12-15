import React from 'react'
import {observer} from 'mobx-react-lite'
import {Props} from './interface'
import {BackdropView} from './view'

export const Backdrop = observer(({open}: Props) => {
  return <BackdropView open={open} />
})
