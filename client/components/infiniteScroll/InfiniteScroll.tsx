import React, {useState, useEffect} from 'react'
import {Progress} from '@components'
import {Box} from '@mui/material'
import * as style from './style'

export const InfiniteScroll = ({data, renderItem}) => {
  const stepCount = 40
  const [list, setList] = useState(data.slice(0, stepCount))
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
      setLoading(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!loading) return
    if (page * stepCount >= data.length) return setLoading(false)

    setTimeout(() => {
      setList(list.concat(data.slice(page * stepCount, page * stepCount + stepCount)))
      setPage(page + 1)
      setLoading(false)
    }, 1000)
  }, [loading])

  return (
    <>
      {list.map(renderItem)}
      {loading && (
        <Box sx={style.progress}>
          <Progress />
        </Box>
      )}
    </>
  )
}
