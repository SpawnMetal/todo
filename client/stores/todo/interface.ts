export interface TodoInterface {
  [key: string]: TodoItemInterface
}

export interface TodoItemInterface {
  value: string
  isDone: boolean
  keyTodo: string
  key: string
}

export type RequestStatuses = 'loading' | 'success' | 'error' | null

export type ToggleModes = 'all' | 'active' | 'completed'
