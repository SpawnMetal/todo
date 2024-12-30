import React, {MouseEvent} from 'react'
import {ToggleModes, useTodoStore} from '@stores'
import {ItemsToggleView} from './view'

export const ItemsToggle = () => {
  const {setToggleMode, getToggleMode} = useTodoStore()

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: ToggleModes) => {
    setToggleMode(newAlignment)
  }

  return <ItemsToggleView handleChange={handleChange} toggleMode={getToggleMode()} />
}
