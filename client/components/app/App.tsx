import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'

export const App = observer(() => {
  useEffect(() => {
    // Получать из sessionStorage
  }, [])

  return (
    <ErrorBoundary>
      <link rel="icon" href="/favicon.ico" />
      Hello!
      {/* {sw.isRequestStatusSuccess('app') && <Home />} */}
      {/* {<Backdrop open={sw.isRequestStatusLoading('people')} />} */}
    </ErrorBoundary>
  )
})
