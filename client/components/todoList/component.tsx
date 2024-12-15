import React from 'react'
import {observer} from 'mobx-react-lite'
import {store} from '@stores'
import {TodoListView} from './view'

export const TodoList = observer(() => {
  return <TodoListView toggleMode={store.getToggleMode()} todo={store.getTodo()} />
})
