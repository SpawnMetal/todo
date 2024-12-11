import React from 'react'
import {observer} from 'mobx-react-lite'
import {Header, Peoples} from '@components'
import {sw} from '@stores'

export const Home = observer(() => {
  return (
    <>
      <Header />
      {sw.isRequestStatusSuccess('people') && <Peoples />}
    </>
  )
})
