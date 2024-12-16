import React from 'react'
import {observer} from 'mobx-react-lite'
import {HomeView} from './view'
import {todo} from '@stores'

export const Home = observer(() => {
  return <HomeView isRequestStatusSuccess={todo.isRequestStatusSuccess()} />
})
