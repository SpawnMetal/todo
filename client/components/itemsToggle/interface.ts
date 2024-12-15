import {ToggleModes} from '@stores'
import {MouseEvent} from 'react'

export interface PropsView {
  handleChange: (event: MouseEvent<HTMLElement>, newAlignment: ToggleModes) => void
  toggleMode: ToggleModes
}
