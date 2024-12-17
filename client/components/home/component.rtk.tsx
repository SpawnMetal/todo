import React from 'react'
import {HomeView} from './view'
import {selectIsRequestStatusSuccess, useAppSelector} from '@stores'

export const Home = () => {
  const isRequestStatusSuccess = useAppSelector(selectIsRequestStatusSuccess)
  return <HomeView isRequestStatusSuccess={isRequestStatusSuccess} />
}
