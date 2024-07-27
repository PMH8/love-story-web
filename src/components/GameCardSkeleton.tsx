import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function GameCardSkeleton() {
    return (
        <Card width='250px'>
            <Skeleton height='200px'/>
            <CardBody>
            <SkeletonText></SkeletonText>
            </CardBody>
            
        </Card>
    )
}

{/* <Card key={game.id} maxW='sm'>
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
    </> */}
