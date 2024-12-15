import {Todo, ToggleModes} from '@stores'

export interface PropsView {
  toggleMode: ToggleModes
  todo: Todo
}

export interface TodoItemMemoProps {
  value: string
  isDone: boolean
  keyTodo: string
}
