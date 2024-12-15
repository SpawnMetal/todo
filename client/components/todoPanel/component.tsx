import React from 'react'
import {observer} from 'mobx-react-lite'
import {TodoPanelView} from './view'

export const TodoPanel = observer(() => {
  return <TodoPanelView />
})
