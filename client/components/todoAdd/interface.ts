export interface PropsView {
  handleOnChangeAddTodo: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleOnKeyUpAddTodo: (event: React.KeyboardEvent<HTMLInputElement>) => void
  handleOnClickAddTodo: () => void
  value: string
}
