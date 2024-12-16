import React from 'react'
import {observer} from 'mobx-react-lite'
import {todo} from '@stores'
import {ClearCompletedView} from './view'

export const ClearCompleted = observer(() => {
  const handleOnClear = () => {
    todo.clearCompleted()
    todo.updateSessionStorage()
  }

  return <ClearCompletedView handleOnClear={handleOnClear} />
})
