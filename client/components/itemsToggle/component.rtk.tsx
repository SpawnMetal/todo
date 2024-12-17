import React, {MouseEvent} from 'react'
import {getToggleMode, setToggleMode, ToggleModes, useAppDispatch, useAppSelector} from '@stores'
import {ItemsToggleView} from './view'

export const ItemsToggle = () => {
  const dispatch = useAppDispatch()
  const toggleMode = useAppSelector(getToggleMode)

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: ToggleModes) => {
    dispatch(setToggleMode(newAlignment))
  }

  return <ItemsToggleView handleChange={handleChange} toggleMode={toggleMode} />
}
