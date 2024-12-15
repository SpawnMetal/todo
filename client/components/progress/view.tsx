import React from 'react'
import {Grid, CircularProgress} from '@mui/material'
import * as style from './style'

export const ProgressView = () => {
  return (
    <Grid container sx={style.progress}>
      <CircularProgress />
    </Grid>
  )
}
