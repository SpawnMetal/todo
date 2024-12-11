import {SxProps} from '@mui/system'
import {Theme} from '@mui/material/styles'
import {alpha} from '@mui/material/styles'

export const appBar: SxProps = {
  backgroundColor: 'rgba(0, 0, 0, 1)',
}

export const title: SxProps = {
  display: {xs: 'none', sm: 'block'},
}

export const searchStyles: SxProps<Theme> = theme => ({
  position: 'relative',
  borderRadius: 1,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
})

export const searchIconWrapper: SxProps<Theme> = theme => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const styledInputBase: SxProps<Theme> = theme => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
})
