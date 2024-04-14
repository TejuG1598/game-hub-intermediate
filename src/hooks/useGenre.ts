import React from 'react'
import useGenres, { Genre } from './useGenres'

const useGenre = (id: number) => {
  const {data} = useGenres();
  return data?.results.find(genre => genre.id === id)
}

export default useGenre