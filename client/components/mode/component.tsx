import React from 'react'
import {mode} from '@config'
import {App} from '@components'
import {Provider} from 'react-redux'
import {store} from '@stores'
import {Typography} from '@mui/material'

export const Mode = () => {
  if (mode === 'mobx') return <App />
  else if (mode === 'rtk')
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )

  return <Typography variant="h2">Выбран некорректный мод, см README.md в корне проекта</Typography>
}
