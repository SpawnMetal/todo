import React from 'react'
import {MODE} from 'env'
import {App} from '@components'
import {Provider} from 'react-redux'
import {store} from '@stores'
import {Typography} from '@mui/material'

export const Mode = () => {
  if (MODE === 'mobx') return <App />
  else if (MODE === 'rtk')
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )

  return <Typography variant="h2">Выбран некорректный мод, см example.env в корне проекта</Typography>
}
