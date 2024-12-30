import React from 'react'
import {useTodoStore} from '@stores'
import {ClearCompletedView} from './view'

export const ClearCompleted = () => {
  const {clearCompleted, updateSessionStorage} = useTodoStore()

  const handleOnClear = () => {
    clearCompleted()
    updateSessionStorage()
  }

  return <ClearCompletedView handleOnClear={handleOnClear} />
}
