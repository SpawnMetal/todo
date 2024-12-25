import {SxProps} from '@mui/system'

export const panelMain: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  mt: '1px',
  ml: 2,
  mr: 2,
  pl: 2.5,
  pr: 2.5,
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 1000px)': {
    justifyContent: 'center',
  },
}
