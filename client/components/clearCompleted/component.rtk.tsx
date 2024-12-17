import React from 'react'
import {observer} from 'mobx-react-lite'
import {clearCompleted, useAppDispatch} from '@stores'
import {ClearCompletedView} from './view'

export const ClearCompleted = observer(() => {
  const dispatch = useAppDispatch()

  const handleOnClear = () => {
    dispatch(clearCompleted())
  }

  return <ClearCompletedView handleOnClear={handleOnClear} />
})
