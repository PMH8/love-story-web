import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;

}
export default function GameCardConteiner({children}:Props) {
  return (
    <Box w = '250px'>
        {children}
    </Box>
  )
}
