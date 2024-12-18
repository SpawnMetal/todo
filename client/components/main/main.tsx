import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {Mode} from '@components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Lazy Render Loading</div>}>
      <Mode />
    </Suspense>
  </React.StrictMode>,
)
