import React from 'react'
import {observer} from 'mobx-react-lite'
import {Grid, CircularProgress} from '@mui/material'
import * as style from './style'

export const Progress = observer(() => {
  return (
    <Grid container sx={style.progress}>
      <CircularProgress />
    </Grid>
  )
})
