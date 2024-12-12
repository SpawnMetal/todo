import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'
import {store} from '@stores'

export const App = observer(() => {
  useEffect(() => {
    // Получать из sessionStorage
    store.setRequestStatusSuccess()
  }, [])

  if (store.isRequestStatusError()) return <ErrorPage />

  return (
    <ErrorBoundary>
      <link rel="icon" href="/favicon.ico" />
      {store.isRequestStatusSuccess() && <Home />}
      {<Backdrop open={store.isRequestStatusLoading()} />}
    </ErrorBoundary>
  )
})
