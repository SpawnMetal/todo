import {mode} from '@config'
import {lazy} from 'react'

console.info('Используется мод:', mode)

export * from './mode/component'
export * from './errorBoundary/ErrorBoundary'
export * from './infiniteScroll/InfiniteScroll'

const componentExports = {
  [mode]: {},
  mobx: {
    App: lazy(() => import('./app/component').then(module => ({default: module.App}))),
    Home: lazy(() => import('./home/component').then(module => ({default: module.Home}))),
    Progress: lazy(() => import('./progress/component').then(module => ({default: module.Progress}))),
    Backdrop: lazy(() => import('./backdrop/component').then(module => ({default: module.Backdrop}))),
    ErrorPage: lazy(() => import('./errorPage/component').then(module => ({default: module.ErrorPage}))),
    Todos: lazy(() => import('./todos/component').then(module => ({default: module.Todos}))),
    TodoAdd: lazy(() => import('./todoAdd/component').then(module => ({default: module.TodoAdd}))),
    TodoList: lazy(() => import('./todoList/component').then(module => ({default: module.TodoList}))),
    TodoItem: lazy(() => import('./todoItem/component').then(module => ({default: module.TodoItem}))),
    TodoPanel: lazy(() => import('./todoPanel/component').then(module => ({default: module.TodoPanel}))),
    ItemsLeft: lazy(() => import('./itemsLeft/component').then(module => ({default: module.ItemsLeft}))),
    ClearCompleted: lazy(() => import('./clearCompleted/component').then(module => ({default: module.ClearCompleted}))),
    ItemsToggle: lazy(() => import('./itemsToggle/component').then(module => ({default: module.ItemsToggle}))),
  },
  rtk: {
    App: lazy(() => import('./app/component.rtk').then(module => ({default: module.App}))),
    Home: lazy(() => import('./home/component.rtk').then(module => ({default: module.Home}))),
    Progress: lazy(() => import('./progress/component.rtk').then(module => ({default: module.Progress}))),
    Backdrop: lazy(() => import('./backdrop/component.rtk').then(module => ({default: module.Backdrop}))),
    ErrorPage: lazy(() => import('./errorPage/component.rtk').then(module => ({default: module.ErrorPage}))),
    Todos: lazy(() => import('./todos/component.rtk').then(module => ({default: module.Todos}))),
    TodoAdd: lazy(() => import('./todoAdd/component.rtk').then(module => ({default: module.TodoAdd}))),
    TodoList: lazy(() => import('./todoList/component.rtk').then(module => ({default: module.TodoList}))),
    TodoItem: lazy(() => import('./todoItem/component.rtk').then(module => ({default: module.TodoItem}))),
    TodoPanel: lazy(() => import('./todoPanel/component.rtk').then(module => ({default: module.TodoPanel}))),
    ItemsLeft: lazy(() => import('./itemsLeft/component.rtk').then(module => ({default: module.ItemsLeft}))),
    ClearCompleted: lazy(() => import('./clearCompleted/component.rtk').then(module => ({default: module.ClearCompleted}))),
    ItemsToggle: lazy(() => import('./itemsToggle/component.rtk').then(module => ({default: module.ItemsToggle}))),
  },
  zustand: {
    App: lazy(() => import('./app/component.zustand').then(module => ({default: module.App}))),
    Home: lazy(() => import('./home/component.zustand').then(module => ({default: module.Home}))),
    Progress: lazy(() => import('./progress/component.zustand').then(module => ({default: module.Progress}))),
    Backdrop: lazy(() => import('./backdrop/component.zustand').then(module => ({default: module.Backdrop}))),
    ErrorPage: lazy(() => import('./errorPage/component.zustand').then(module => ({default: module.ErrorPage}))),
    Todos: lazy(() => import('./todos/component.zustand').then(module => ({default: module.Todos}))),
    TodoAdd: lazy(() => import('./todoAdd/component.zustand').then(module => ({default: module.TodoAdd}))),
    TodoList: lazy(() => import('./todoList/component.zustand').then(module => ({default: module.TodoList}))),
    TodoItem: lazy(() => import('./todoItem/component.zustand').then(module => ({default: module.TodoItem}))),
    TodoPanel: lazy(() => import('./todoPanel/component.zustand').then(module => ({default: module.TodoPanel}))),
    ItemsLeft: lazy(() => import('./itemsLeft/component.zustand').then(module => ({default: module.ItemsLeft}))),
    ClearCompleted: lazy(() => import('./clearCompleted/component.zustand').then(module => ({default: module.ClearCompleted}))),
    ItemsToggle: lazy(() => import('./itemsToggle/component.zustand').then(module => ({default: module.ItemsToggle}))),
  },
}

export const {App, Home, Progress, Backdrop, ErrorPage, Todos, TodoAdd, TodoList, TodoItem, TodoPanel, ItemsLeft, ClearCompleted, ItemsToggle} = componentExports[mode]

// Interfaces
export {Props as TodoItemProps} from './todoItem/interface'
