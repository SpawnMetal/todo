import React from 'react'
import {HomeView} from './view'
import {useTodoStore} from '@stores'

export const Home = () => {
  const {isRequestStatusSuccess} = useTodoStore()

  return <HomeView isRequestStatusSuccess={isRequestStatusSuccess()} />
}
