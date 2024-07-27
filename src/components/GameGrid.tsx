import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hook/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {
  const { games, error,isLoading } = useGames();
  var skeletons = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns={[1,2,3,4]} spacing='20px' padding='20px'>
        {isLoading && skeletons.map(skeleton=><GameCardSkeleton key ={skeleton} />)}
        {games.map(game =>
         <GameCard key={game.id} game={game}></GameCard>
        )}
      </SimpleGrid>

    </>
  )
}

export default GameGrid