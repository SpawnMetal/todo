import React, {MouseEvent} from 'react'
import {observer} from 'mobx-react-lite'
import {store, ToggleModes} from '@stores'
import {ItemsToggleView} from './view'

export const ItemsToggle = observer(() => {
  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: ToggleModes) => {
    store.setToggleMode(newAlignment)
  }

  return <ItemsToggleView handleChange={handleChange} toggleMode={store.getToggleMode()} />
})
