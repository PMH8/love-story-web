import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hook/useGames';
import GameCard from './GameCard';


const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={[1, 2, 4]} spacing='20px' padding='20px'>
        {games.map(game =>
         <GameCard key={game.id} game={game}></GameCard>
        )}
      </SimpleGrid>

    </>
  )
}

export default GameGrid