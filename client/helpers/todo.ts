import {AppDispatch, setTimerId, TodoInterface} from '@stores'
import {DEBOUNCE_UPDATE_TODO} from 'env'

// Получает задачи из sessionStorage
export async function getsessionStorage() {
  try {
    const todo = sessionStorage.getItem('todo')
    if (todo) return JSON.parse(todo)
  } catch (error) {}
}

// Сохраняет задачи в sessionStorage
export async function setSessionStorage(todo: TodoInterface) {
  try {
    sessionStorage.setItem('todo', JSON.stringify(todo))
  } catch (error) {}
}

// Обновляет задачи в sessionStorage
export async function updateSessionStorage(todo: TodoInterface, timerId: NodeJS.Timeout, dispatch: AppDispatch) {
  clearTimeout(timerId)
  dispatch(setTimerId(setTimeout(() => setSessionStorage(todo), +DEBOUNCE_UPDATE_TODO)))
}
