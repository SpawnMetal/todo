// import {MODE} from 'env'
// import {lazy} from 'react'

// const mode = MODE === 'mobx' ? '' : `.${MODE}`
// console.log('mode', {mode})

// const exports = {
//   mobx: {
//     App: lazy(() => import('./app/component').then(module => ({default: module.App}))),
//   },
//   rtk: {
//     App: lazy(() => import('./app/component.rtk').then(module => ({default: module.App}))),
//   },
// }

// let App
// if (MODE === 'mobx') {
//   App = lazy(() => import('./app/component').then(module => ({default: module.App})))
// } else if (MODE === 'rtk') {
//   App = lazy(() => import('./app/component.rtk').then(module => ({default: module.App})))
// }
// export {App}

// export const App = lazy(() => import('./app/component').then(module => ({default: module.App})))
// export const App = import('./app/component.rtk').then(module => module.App)

// let AppPromise //: Promise<{App: React.FC}>
// if (MODE === 'mobx') {
//   AppPromise = import('./app/component').then(module => module.App)
// } else if (MODE === 'rtk') {
//   AppPromise = import('./app/component.rtk').then(module => module.App)
// } else {
//   throw new Error(`Unknown mode: ${MODE}`)
// }
// export const App = AppPromise

// const mode = MODE === 'mobx' ? '' : `.${MODE}`
// const path = MODE === 'mobx' ? './app/component' : './app/component.rtk'
// export * from `${path}`

// export const App = import('./app/component')

// export let App
// if (MODE === 'mobx') {
//   App = import('./app/component').then(module => module.App)
//   //   App = import('./app/component')
//   //   App = await import('./app/component')
// } else if (MODE === 'rtk') {
//   App = import('./app/component.rtk').then(module => module.App)
//   //   App = import('./app/component.rtk')
//   //   App = await import('./app/component.rtk')
// }

// if (MODE === 'mobx') {
//   export * from './app/component'
// } else if (MODE === 'rtk') {
//   export * from './app/component.rtk'
// }

// export const App = await import(`./app/component${mode}`)

// export * from `./app/component${mode}`
// export * from `./home/component${mode}`
// export * from `./progress/component${mode}`
// export * from `./backdrop/component${mode}`
// export * from `./errorPage/component${mode}`
// export * from `./todos/component${mode}`
// export * from `./todoAdd/component${mode}`
// export * from `./todoList/component${mode}`
// export * from `./todoItem/component${mode}`
// export * from `./todoPanel/component${mode}`
// export * from `./itemsLeft/component${mode}`
// export * from `./clearCompleted/component${mode}`
// export * from `./itemsToggle/component${mode}`

export * from './errorBoundary/ErrorBoundary'
export * from './infiniteScroll/InfiniteScroll'

// if (MODE === 'mobx') {
//   // MobX
export * from './app/component'
export * from './home/component'
export * from './progress/component'
export * from './backdrop/component'
export * from './errorPage/component'
export * from './todos/component'
export * from './todoAdd/component'
export * from './todoList/component'
export * from './todoItem/component'
export * from './todoPanel/component'
export * from './itemsLeft/component'
export * from './clearCompleted/component'
export * from './itemsToggle/component'
// } else if (MODE === 'rtk') {
//   // Redux Toolkit
//   export * from './app/component.rtk'
//   export * from './home/component.rtk'
//   export * from './progress/component.rtk'
//   export * from './backdrop/component.rtk'
//   export * from './errorPage/component.rtk'
//   export * from './todos/component.rtk'
//   export * from './todoAdd/component.rtk'
//   export * from './todoList/component.rtk'
//   export * from './todoItem/component.rtk'
//   export * from './todoPanel/component.rtk'
//   export * from './itemsLeft/component.rtk'
//   export * from './clearCompleted/component.rtk'
//   export * from './itemsToggle/component.rtk'
// }

// Interfaces
export {Props as TodoItemProps} from './todoItem/interface'
