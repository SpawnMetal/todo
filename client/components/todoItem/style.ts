import {SxProps} from '@mui/system'
import {Theme} from '@mui/material/styles'
import {alpha} from '@mui/material/styles'
import {CSSProperties} from 'react'

export const inputStyles: SxProps = {
  position: 'relative',
  mb: '1px',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
  backgroundColor: alpha('#fff', 0.15),
  '&:hover': {
    backgroundColor: alpha('#fff', 0.25),
  },
  width: 'auto',
  mr: 2,
  ml: 2,
}

export const inputIconWrapper: SxProps = {
  pl: 2,
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.2,
  zIndex: 1,
  '&:hover': {cursor: 'pointer'},
}

export const styledInputBase: SxProps<Theme> = theme => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
})

export const isDoneText: CSSProperties = {
  color: '#9c959e',
  textDecoration: 'line-through',
}
