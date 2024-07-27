import React from 'react'
import { Game } from '../hook/useGames';
import { Card, CardBody, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import Rating from './Rating';
import getCroppedImageURl from '../services/image-url';

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <>
      <Card key={game.id} maxW='sm'>
        <Image
          src={getCroppedImageURl(game.background_image)}
          alt={game.name}
          borderRadius='lg'
        />
        <CardBody pt='1' px='1'>
          <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack w='full' justify="space-between">
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
            <Rating rating = {game.rating}></Rating>
          </HStack>
        </CardBody>
      </Card>
    </>
  )
}
