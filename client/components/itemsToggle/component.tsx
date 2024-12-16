import React, {MouseEvent} from 'react'
import {observer} from 'mobx-react-lite'
import {todo, ToggleModes} from '@stores'
import {ItemsToggleView} from './view'

export const ItemsToggle = observer(() => {
  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: ToggleModes) => {
    todo.setToggleMode(newAlignment)
  }

  return <ItemsToggleView handleChange={handleChange} toggleMode={todo.getToggleMode()} />
})
