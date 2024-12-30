import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppState} from '@stores'
import {TodoInterface, RequestStatuses, ToggleModes} from './interface'

export interface TodoState {
  requestStatusLoading: RequestStatuses
  requestStatusSuccess: RequestStatuses
  requestStatusError: RequestStatuses
  requestStatus: RequestStatuses
  todo: TodoInterface
  itemsLeft: number
  toggleMode: ToggleModes
  timerId: NodeJS.Timeout
}

const initialState: TodoState = {
  requestStatusLoading: 'loading', // Статус получения данных - загрузка
  requestStatusSuccess: 'success', // Статус получения данных - успех
  requestStatusError: 'error', // Статус получения данных - ошибка
  requestStatus: null, // Статус получения данных
  todo: {}, // Данные по задачам
  itemsLeft: 0, // Количество задач, которые ещё не выполнены
  toggleMode: 'all', // Режим отображения задач
  timerId: null, // Идентификатор debounce таймера для сохранения данных
}

export const todoSlice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    // Устанавливает статус получения данных - загрузка
    setRequestStatusLoading(state: TodoState) {
      state.requestStatus = state.requestStatusLoading
    },

    // Устанавливает статус получения данных - успех
    setRequestStatusSuccess(state: TodoState) {
      state.requestStatus = state.requestStatusSuccess
    },

    // Устанавливает статус получения данных - ошибка
    setRequestStatusError(state: TodoState) {
      state.requestStatus = state.requestStatusError
    },

    // Загружает задачи
    setTodo(state: TodoState, action: PayloadAction<TodoInterface>) {
      const todo = action.payload

      if (!todo) return

      state.todo = todo
    },

    // Добавляет задачу
    addTodo(state: TodoState, action: PayloadAction<string>) {
      const value = action.payload

      if (!value) return

      const keyTodo = String(Date.now())
      state.todo[keyTodo] = {value, isDone: false, keyTodo, key: keyTodo}
    },

    // Помечает задачу как выполненную
    setTodoDone(state: TodoState, action: PayloadAction<{key: string; isDone: boolean}>) {
      const {key, isDone} = action.payload
      state.todo[key].isDone = isDone
    },

    // Редактирует задачу
    editTodo(state: TodoState, action: PayloadAction<{key: string; value: string}>) {
      const {key, value} = action.payload
      state.todo[key].value = value
    },

    // Устанавливает значение оставшихся не выполненных задач
    setItemsLeft(state: TodoState) {
      state.itemsLeft = Object.values(state.todo).filter(item => !item.isDone).length
    },

    // Удаляет завершённые задачи
    clearCompleted(state: TodoState) {
      for (const key in state.todo) state.todo[key].isDone && delete state.todo[key]
    },

    // Устанавливает режим отображения задач
    setToggleMode(state: TodoState, action: PayloadAction<ToggleModes>) {
      const mode = action.payload
      state.toggleMode = mode
    },

    // Устанавливает id таймера
    setTimerId(state: TodoState, action: PayloadAction<NodeJS.Timeout>) {
      const timerId = action.payload
      state.timerId = timerId
    },
  },
})

export const {setRequestStatusLoading, setRequestStatusSuccess, setRequestStatusError, setTodo, addTodo, setTodoDone, editTodo, setItemsLeft, clearCompleted, setToggleMode, setTimerId} =
  todoSlice.actions

// Получает результат загрузки данных - загрузка
export const selectIsRequestStatusLoading = (state: AppState) => state.todoReducer.requestStatus === state.todoReducer.requestStatusLoading

// Получает результат загрузки данных - успех
export const selectIsRequestStatusSuccess = (state: AppState) => state.todoReducer.requestStatus === state.todoReducer.requestStatusSuccess

// Получает результат загрузки данных - ошибка
export const selectIsRequestStatusError = (state: AppState) => state.todoReducer.requestStatus === state.todoReducer.requestStatusError

// Получает значение оставшихся не выполненных задач
export const getItemsLeft = (state: AppState) => state.todoReducer.itemsLeft

// Получает режим отображения задач
export const getToggleMode = (state: AppState) => state.todoReducer.toggleMode

// Получает задачи
export const getTodo = (state: AppState) => state.todoReducer.todo

// Получает id таймера
export const getTimerId = (state: AppState) => state.todoReducer.timerId

export const todoReducer = todoSlice.reducer
