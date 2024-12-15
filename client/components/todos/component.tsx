import React from 'react'
import {observer} from 'mobx-react-lite'
import {TodosView} from './view'

export const Todos = observer(() => {
  return <TodosView />
})
