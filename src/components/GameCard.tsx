import React from 'react'
import { Game } from '../hook/useGames';
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <>
      <Card maxW='sm'>
        <Image
          src={game.background_image}
          alt={game.name}
          borderRadius='lg'
        />
        <CardBody pt='1' px = '1' >
          <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  )
}
