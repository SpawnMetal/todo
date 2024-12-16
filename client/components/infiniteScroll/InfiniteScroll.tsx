import React, {useState, useEffect, useMemo} from 'react'
import {Progress} from '@components'
import {Box} from '@mui/material'
import * as style from './style'
import {SCROLL_ITEMS_COUNT} from 'env'

export const InfiniteScroll = ({data, renderItem}) => {
  const stepCount = +SCROLL_ITEMS_COUNT
  const [startIndex, setStartIndex] = useState(0)
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
      setStartIndex((page - 1) * stepCount)
      setEndIndex(page * stepCount + stepCount)
      setPage(page + 1)
      setLoading(false)
    }, 1000)
  }, [loading])

  const dataMemo = useMemo(() => {
    const result = []
    for (let i = startIndex; i < endIndex; i++) {
      if (data[i] === undefined) break

      const RenderItem = renderItem
      result.push(<RenderItem {...data[i]} />)
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
