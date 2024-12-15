import React from 'react'
import {observer} from 'mobx-react-lite'
import {store} from '@stores'
import {ItemsLeftView} from './view'

export const ItemsLeft = observer(() => {
  return <ItemsLeftView itemsLeft={store.getItemsLeft()} />
})
