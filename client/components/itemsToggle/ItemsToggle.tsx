import React, {MouseEvent} from 'react'
import {observer} from 'mobx-react-lite'
import {ToggleButton, ToggleButtonGroup} from '@mui/material'
import * as style from './style'
import {store, ToggleModes} from '@stores'

export const ItemsToggle = observer(() => {
  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: ToggleModes) => {
    store.setToggleMode(newAlignment)
  }

  return (
    <ToggleButtonGroup sx={style.group} color="primary" value={store.getToggleMode()} exclusive onChange={handleChange}>
      <ToggleButton sx={style.button} value="all">
        All
      </ToggleButton>
      <ToggleButton sx={style.button} value="active">
        Active
      </ToggleButton>
      <ToggleButton sx={style.button} value="completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  )
})
