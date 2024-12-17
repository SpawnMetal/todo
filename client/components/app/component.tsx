import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {todo} from '@stores'
import {AppView} from './view'

export const App = observer(() => {
  useEffect(() => {
    todo.setRequestStatusLoading()

    setTimeout(() => {
      todo.getsessionStorage().finally(() => {
        todo.setRequestStatusSuccess()
        todo.setItemsLeft()
      })
    }, 1000) // Иммитация загрузки
  }, [])

  return <AppView isRequestStatusError={todo.isRequestStatusError()} isRequestStatusSuccess={todo.isRequestStatusSuccess()} isRequestStatusLoading={todo.isRequestStatusLoading()} />
})
