import React from 'react'
import {Typography} from '@mui/material'
import * as style from './style'

export const ErrorPageView = () => {
  return (
    <Typography sx={style.text} variant="h2">
      There was an error on the page, please try again later
    </Typography>
  )
}
