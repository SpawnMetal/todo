import React from 'react'
import {observer} from 'mobx-react-lite'
import {todo} from '@stores'
import {ItemsLeftView} from './view'

export const ItemsLeft = observer(() => {
  return <ItemsLeftView itemsLeft={todo.getItemsLeft()} />
})
