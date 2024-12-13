import React from 'react'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'
import {AppInterface} from './App.interface'

export const AppView = ({isRequestStatusError, isRequestStatusSuccess, isRequestStatusLoading}: AppInterface) => {
  if (isRequestStatusError) return <ErrorPage />

  return (
    <ErrorBoundary>
      <link rel="icon" href="/favicon.ico" />
      {isRequestStatusSuccess && <Home />}
      {<Backdrop open={isRequestStatusLoading} />}
    </ErrorBoundary>
  )
}
