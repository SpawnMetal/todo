import {makeAutoObservable} from 'mobx'

type RequestStatuses = 'loading' | 'success' | 'error' | null

interface Todo {
  [key: string]: {
    value: string
    isDone: boolean
  }
}

export type ToggleModes = 'all' | 'active' | 'completed'

// Основное состояние приложения
class Sw {
  requestStatusLoading: RequestStatuses = 'loading' // Статус получения данных - загрузка
  requestStatusSuccess: RequestStatuses = 'success' // Статус получения данных - успех
  requestStatusError: RequestStatuses = 'error' // Статус получения данных - ошибка
  requestStatus: RequestStatuses = null // Статус получения данных
  todo: Todo = {} // Данные по задачам
  itemsLeft = 0
  toggleMode: ToggleModes = 'all'

  constructor() {
    makeAutoObservable(this)
  }

  // Устанавливает статус получения данных - загрузка
  setRequestStatusLoading() {
    this.requestStatus = this.requestStatusLoading
  }

  // Устанавливает статус получения данных - успех
  setRequestStatusSuccess() {
    this.requestStatus = this.requestStatusSuccess
  }

  // Устанавливает статус получения данных - ошибка
  setRequestStatusError() {
    this.requestStatus = this.requestStatusError
  }

  // Получает результат загрузки данных - загрузка
  isRequestStatusLoading() {
    return this.requestStatus === this.requestStatusLoading
  }

  // Получает результат загрузки данных - успех
  isRequestStatusSuccess() {
    return this.requestStatus === this.requestStatusSuccess
  }

  // Получает результат загрузки данных - ошибка
  isRequestStatusError() {
    return this.requestStatus === this.requestStatusError
  }

  addTodo(value: string) {
    if (!value) return

    this.todo = {...this.todo, [Date.now()]: {value, isDone: false}}
  }

  setTodoDone(key: string, isDone: boolean) {
    if (!this.todo[key]) return

    this.todo[key].isDone = isDone
    this.todo = {...this.todo}
  }

  editTodo(key: string, value: string) {
    this.todo[key].value = value
    this.todo = {...this.todo}
  }

  setItemsLeft() {
    this.itemsLeft = Object.values(this.todo).filter(item => !item.isDone).length
  }

  getItemsLeft() {
    return this.itemsLeft
  }

  clearCompleted() {
    for (const key in this.todo) this.todo[key].isDone && delete this.todo[key]
    this.todo = {...this.todo}
  }

  getToggleMode() {
    return this.toggleMode
  }

  setToggleMode(mode: ToggleModes) {
    this.toggleMode = mode
  }
}

export const store = new Sw()
