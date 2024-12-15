import React from 'react'
import {observer} from 'mobx-react-lite'
import {store} from '@stores'
import {ClearCompletedView} from './view'

export const ClearCompleted = observer(() => {
  const handleOnClear = () => store.clearCompleted()

  return <ClearCompletedView handleOnClear={handleOnClear} />
})
