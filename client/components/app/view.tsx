import React from 'react'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'
import {PropsView} from './interface'

export const AppView = ({isRequestStatusError, isRequestStatusSuccess, isRequestStatusLoading}: PropsView) => {
  if (isRequestStatusError) return <ErrorPage />

  return (
    <ErrorBoundary>
      <link rel="icon" href="/favicon.ico" />
      {isRequestStatusSuccess && <Home />}
      {/* В MODE = mobx, изменение open = false в Backdrop не реагирует, как-то связано с lazy импортом */}
      {isRequestStatusLoading && <Backdrop open={isRequestStatusLoading} />}
    </ErrorBoundary>
  )
}
