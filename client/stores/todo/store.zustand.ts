import {TodoInterface, RequestStatuses, ToggleModes} from './interface'
import {create} from 'zustand'
import {debounceUpdateTodo} from '@config'

interface TodoState {
  requestStatusLoading: RequestStatuses // Статус получения данных - загрузка
  requestStatusSuccess: RequestStatuses // Статус получения данных - успех
  requestStatusError: RequestStatuses // Статус получения данных - ошибка
  requestStatus: RequestStatuses // Статус получения данных
  todo: TodoInterface // Данные по задачам
  itemsLeft: number // Количество задач, которые ещё не выполнены
  toggleMode: ToggleModes // Режим отображения задач
  timerId: NodeJS.Timeout | null // Идентификатор debounce таймера для сохранения данных
  setRequestStatusLoading: () => void // Получает результат загрузки данных - загрузка
  setRequestStatusSuccess: () => void // Получает результат загрузки данных - успех
  setRequestStatusError: () => void // Получает результат загрузки данных - ошибка
  isRequestStatusLoading: () => boolean // Получает результат загрузки данных - загрузка
  isRequestStatusSuccess: () => boolean // Получает результат загрузки данных - успех
  isRequestStatusError: () => boolean // Получает результат загрузки данных - ошибка
  addTodo: (value: string) => void // Добавляет задачу
  setTodoDone: (key: string, isDone: boolean) => void // Помечает задачу как выполненную
  editTodo: (key: string, value: string) => void // Редактирует задачу
  setItemsLeft: () => void // Устанавливает значение оставшихся не выполненных задач
  getItemsLeft: () => number // Получает значение оставшихся не выполненных задач
  clearCompleted: () => void // Удаляет завершённые задачи
  getToggleMode: () => ToggleModes // Получает режим отображения задач
  setToggleMode: (mode: ToggleModes) => void // Устанавливает режим отображения задач
  getTodo: () => TodoInterface // Получает копию задач с целью предотвращения внесения изменений из вне
  setSessionStorage: () => void // Сохраняет задачи в sessionStorage
  getsessionStorage: () => void // Получает задачи из sessionStorage
  updateSessionStorage: () => void // Обновляет задачи в sessionStorage
}

export const useTodoStore = create<TodoState>((set, get) => ({
  requestStatusLoading: 'loading',
  requestStatusSuccess: 'success',
  requestStatusError: 'error',
  requestStatus: null,
  todo: {},
  itemsLeft: 0,
  toggleMode: 'all',
  timerId: null,

  setRequestStatusLoading: () => set({requestStatus: 'loading'}),

  setRequestStatusSuccess: () => set({requestStatus: 'success'}),

  setRequestStatusError: () => set({requestStatus: 'error'}),

  isRequestStatusLoading: () => {
    return get().requestStatus === get().requestStatusLoading
  },

  isRequestStatusSuccess: () => {
    return get().requestStatus === get().requestStatusSuccess
  },

  isRequestStatusError: () => {
    return get().requestStatus === get().requestStatusError
  },

  addTodo: value => {
    if (!value) return

    const keyTodo = String(Date.now())
    set(state => ({
      todo: {...state.todo, [keyTodo]: {value, isDone: false, keyTodo, key: keyTodo}},
    }))
  },

  setTodoDone: (key, isDone) => {
    set(state => ({
      todo: {
        ...state.todo,
        [key]: {...state.todo[key], isDone},
      },
    }))
  },

  editTodo: (key, value) => {
    set(state => ({
      todo: {
        ...state.todo,
        [key]: {...state.todo[key], value},
      },
    }))
  },

  setItemsLeft: () => {
    set({itemsLeft: Object.values(get().todo).filter(item => !item.isDone).length})
  },

  getItemsLeft: () => get().itemsLeft,

  clearCompleted: () => {
    const todo = get().todo
    for (const key in todo) todo[key].isDone && delete todo[key]
    set({todo: {...todo}})
  },

  getToggleMode: () => {
    return get().toggleMode
  },

  setToggleMode: mode => {
    set({toggleMode: mode})
  },

  getTodo: () => {
    return get().todo
  },

  setSessionStorage: async () => {
    try {
      sessionStorage.setItem('todo', JSON.stringify(get().todo))
    } catch (error) {}
  },

  getsessionStorage: async () => {
    try {
      const todo = sessionStorage.getItem('todo')
      if (todo) set({todo: JSON.parse(todo)})
    } catch (error) {}
  },

  updateSessionStorage: () => {
    clearTimeout(get().timerId)
    const timerId = setTimeout(() => get().setSessionStorage(), debounceUpdateTodo)
    set({timerId})
  },
}))
