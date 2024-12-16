import {TodoItemInterface} from '@stores'

export interface Props extends TodoItemInterface {}

export interface PropsView {
  isDone: boolean
  value: string
  handleOnChangeIsDone: () => void
  handleOnChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void
}
