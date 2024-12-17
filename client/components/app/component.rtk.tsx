import React, {useEffect} from 'react'
import {
  selectIsRequestStatusError,
  selectIsRequestStatusLoading,
  selectIsRequestStatusSuccess,
  setItemsLeft,
  setRequestStatusLoading,
  setRequestStatusSuccess,
  setTodo,
  useAppDispatch,
  useAppSelector,
} from '@stores'
import {AppView} from './view'
import {getsessionStorage} from '@helpers'

export const App = () => {
  const dispatch = useAppDispatch()
  const isRequestStatusError = useAppSelector(selectIsRequestStatusLoading)
  const isRequestStatusSuccess = useAppSelector(selectIsRequestStatusSuccess)
  const isRequestStatusLoading = useAppSelector(selectIsRequestStatusError)

  useEffect(() => {
    dispatch(setRequestStatusLoading())

    setTimeout(() => {
      getsessionStorage()
        .then(todo => {
          dispatch(setTodo(todo))
        })
        .finally(() => {
          dispatch(setRequestStatusSuccess())
          dispatch(setItemsLeft())
        })
    }, 1000) // Иммитация загрузки
  }, [])

  return <AppView isRequestStatusError={isRequestStatusError} isRequestStatusSuccess={isRequestStatusSuccess} isRequestStatusLoading={isRequestStatusLoading} />
}
