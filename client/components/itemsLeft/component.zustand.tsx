import React from 'react'
import {useTodoStore} from '@stores'
import {ItemsLeftView} from './view'

export const ItemsLeft = () => {
  const {getItemsLeft} = useTodoStore()

  return <ItemsLeftView itemsLeft={getItemsLeft()} />
}
