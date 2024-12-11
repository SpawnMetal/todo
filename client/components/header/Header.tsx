import React from 'react'
import {observer} from 'mobx-react-lite'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import * as style from './style'
import {sw} from '@stores'
import {Link} from '@mui/material'

export const Header = observer(() => {
  const handleOnKeyUp = (searchString: string) => {
    sw.getSwSearch(searchString)
  }

  return (
    <Box>
      <AppBar position="fixed" sx={style.appBar}>
        <Toolbar>
          <Link href="/" underline="none" color="inherit">
            <Typography variant="h6" noWrap component="div" sx={style.title}>
              Faraway - Star Wars API
            </Typography>
          </Link>
          <Box sx={style.searchStyles}>
            <Box sx={style.searchIconWrapper}>
              <SearchIcon />
            </Box>
            <InputBase
              sx={style.styledInputBase}
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => event.target instanceof HTMLInputElement && event.key === 'Enter' && handleOnKeyUp(event.target.value)}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
})
