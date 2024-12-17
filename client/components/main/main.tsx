import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {App} from '@components'
import {Provider} from 'react-redux'
import {store} from '@stores'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Lazy Render Loading</div>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
