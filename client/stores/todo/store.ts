import {makeAutoObservable} from 'mobx'
import {TodoInterface, RequestStatuses, ToggleModes} from './interface'

// Основное состояние приложения
class Todo {
  private requestStatusLoading: RequestStatuses = 'loading' // Статус получения данных - загрузка
  private requestStatusSuccess: RequestStatuses = 'success' // Статус получения данных - успех
  private requestStatusError: RequestStatuses = 'error' // Статус получения данных - ошибка
  private requestStatus: RequestStatuses = null // Статус получения данных
  private todo: TodoInterface = {} // Данные по задачам
  private itemsLeft = 0 // Количество задач, которые ещё не выполнены
  private toggleMode: ToggleModes = 'all' // Режим отображения задач
  private timerId: NodeJS.Timeout = null // Идентификатор debounce таймера для для сохранения данных

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

  // Добавляет задачу
  addTodo(value: string) {
    if (!value) return

    const keyTodo = Date.now()
    this.todo = {...this.todo, [keyTodo]: {value, isDone: false, keyTodo, key: keyTodo}}
  }

  // Помечает задачу как выполненную
  setTodoDone(key: string, isDone: boolean) {
    if (!this.todo[key]) return

    this.todo[key].isDone = isDone
    this.todo = {...this.todo}
  }

  // Редактирует задачу
  editTodo(key: string, value: string) {
    this.todo[key].value = value
    this.todo = {...this.todo}
  }

  // Устанавливает значение оставшихся не выполненных задач
  setItemsLeft() {
    this.itemsLeft = Object.values(this.todo).filter(item => !item.isDone).length
  }

  // Получает значение оставшихся не выполненных задач
  getItemsLeft() {
    return this.itemsLeft
  }

  // Удаляет завершённые задачи
  clearCompleted() {
    for (const key in this.todo) this.todo[key].isDone && delete this.todo[key]
    this.todo = {...this.todo}
  }

  // Получает режим отображения задач
  getToggleMode() {
    return this.toggleMode
  }

  // Устанавливает режим отображения задач
  setToggleMode(mode: ToggleModes) {
    this.toggleMode = mode
  }

  // Получает задачи
  getTodo() {
    return this.todo
  }

  // Сохраняет задачи в sessionStorage
  private async setSessionStorage() {
    try {
      sessionStorage.setItem('todo', JSON.stringify(this.todo))
    } catch (error) {}
  }

  // Получает задачи из sessionStorage
  async getsessionStorage() {
    try {
      const todo = sessionStorage.getItem('todo')
      if (todo) this.todo = JSON.parse(todo)
    } catch (error) {}
  }

  // Обновляет задачи в sessionStorage
  async updateSessionStorage() {
    clearTimeout(this.timerId)
    this.timerId = setTimeout(() => this.setSessionStorage(), 5000)
  }
}

export const todo = new Todo()
