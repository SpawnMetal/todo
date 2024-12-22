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
      {/* Отсутствие ключа вызывает вечную загрузку в MobX не строгом режиме */}
      <Backdrop open={isRequestStatusLoading} key={Date.now()} />
    </ErrorBoundary>
  )
}
