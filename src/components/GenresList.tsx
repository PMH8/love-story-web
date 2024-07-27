import React from 'react'
import useGenres from '../hook/useGenres';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

export default function GenresList() {
    const { genres, error, isLoading } = useGenres();
  return (
    <>
     {error && <Text>{error}</Text>}
     <ul>
        {genres.map(genre=><li key={genre.id}>{genre.name}</li>)}
     </ul>
    </>
  )
}
