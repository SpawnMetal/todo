export interface Props {
  isDone: boolean
  value: string
  keyTodo: string
}

export interface PropsView {
  isDone: boolean
  value: string
  handleOnChangeIsDone: () => void
  handleOnChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void
}
