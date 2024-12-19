import React, {useState, useEffect, useMemo, memo} from 'react'
import {Progress} from '@components'
import {Box} from '@mui/material'
import * as style from './style'
import {scrollItemsCount} from '@config'

export const InfiniteScroll = ({data, renderItem}) => {
  const stepCount = scrollItemsCount
  const [endIndex, setEndIndex] = useState(stepCount)
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
      setEndIndex(page * stepCount + stepCount)
      setPage(page + 1)
      setLoading(false)
    }, 1000)
  }, [loading])

  const dataMemo = useMemo(() => {
    const result = []

    for (let i = 0; i < endIndex; i++) {
      if (data[i] === undefined) break

      result.push(renderItem(data[i]))
    }

    return result
  }, [data, page])

  return (
    <>
      {dataMemo}
      {loading && (
        <Box sx={style.progress}>
          <Progress />
        </Box>
      )}
    </>
  )
}
