import React, {useEffect} from 'react'
import {useTodoStore} from '@stores'
import {AppView} from './view'

export const App = () => {
  const {setRequestStatusLoading, getsessionStorage, setRequestStatusSuccess, setItemsLeft, isRequestStatusError, isRequestStatusSuccess, isRequestStatusLoading} = useTodoStore()

  useEffect(() => {
    setRequestStatusLoading()

    setTimeout(() => {
      getsessionStorage().finally(() => {
        setRequestStatusSuccess()
        setItemsLeft()
      })
    }, 1000) // Иммитация загрузки
  }, [])

  return <AppView isRequestStatusError={isRequestStatusError()} isRequestStatusSuccess={isRequestStatusSuccess()} isRequestStatusLoading={isRequestStatusLoading()} />
}
