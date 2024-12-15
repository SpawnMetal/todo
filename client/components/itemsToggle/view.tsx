import React from 'react'
import {ToggleButton, ToggleButtonGroup} from '@mui/material'
import * as style from './style'
import {PropsView} from './interface'

export const ItemsToggleView = ({handleChange, toggleMode}: PropsView) => {
  return (
    <ToggleButtonGroup sx={style.group} color="primary" value={toggleMode} exclusive onChange={handleChange}>
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
}
