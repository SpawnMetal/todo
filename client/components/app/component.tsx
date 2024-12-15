import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {store} from '@stores'
import {AppView} from './view'

export const App = observer(() => {
  useEffect(() => {
    // Получать из sessionStorage
    store.setRequestStatusSuccess()
  }, [])

  return <AppView isRequestStatusError={store.isRequestStatusError()} isRequestStatusSuccess={store.isRequestStatusSuccess()} isRequestStatusLoading={store.isRequestStatusLoading()} />
})
