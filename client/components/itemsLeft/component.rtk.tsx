import React from 'react'
import {getItemsLeft, useAppSelector} from '@stores'
import {ItemsLeftView} from './view'

export const ItemsLeft = () => {
  const itemsLeft = useAppSelector(getItemsLeft)
  return <ItemsLeftView itemsLeft={itemsLeft} />
}
