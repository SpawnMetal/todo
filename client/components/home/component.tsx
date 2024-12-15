import React from 'react'
import {observer} from 'mobx-react-lite'
import {HomeView} from './view'
import {store} from '@stores'

export const Home = observer(() => {
  return <HomeView isRequestStatusSuccess={store.isRequestStatusSuccess()} />
})
