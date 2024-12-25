import React, {useState, useEffect, useMemo, memo, useRef} from 'react'
import {Progress} from '@components'
import {Box} from '@mui/material'
import * as style from './style'
import {scrollItemsCount} from '@config'

export const InfiniteScroll = ({data, renderItem}) => {
  const stepCount = scrollItemsCount
  const [endIndex, setEndIndex] = useState(stepCount)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const isMaxLoaded = useRef(false)
  const dataRef = useRef(true) // При первом рендере действия не требуются

  // Обработка при добавлении новых элементов
  useEffect(() => {
    if (dataRef.current) dataRef.current = false
    else {
      if (loading || page * stepCount + stepCount <= data.length) return // В процессе загрузки действия ниже не требуются

      // Если все элементы влазят
      setEndIndex(data.length)
      setPage(Math.ceil(endIndex / stepCount))
    }
  }, [data])

  // В StrictMode необходима очистка при первом рендере
  useEffect(() => {
    return () => {
      dataRef.current = true
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + Math.ceil(document.documentElement.scrollTop) !== document.documentElement.offsetHeight) return
      // Если не передать endIndex в зависимости, то endIndex будет всегда равна изначальному значению
      if (endIndex >= data.length) return

      setLoading(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [endIndex])

  // Загрузка следующих элементов, если все элементы влезли
  useEffect(() => {
    if (loading || isMaxLoaded.current) return
    if (document.documentElement.offsetHeight <= window.innerHeight + Math.ceil(document.documentElement.scrollTop) && dataMemo.length < data.length) {
      setLoading(true)
      return
    }

    isMaxLoaded.current = true
  }, [loading])

  // Эмуляция загрузки элементов
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
    return data.slice(0, endIndex).map(renderItem)
  }, [data, endIndex])

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
