import React from 'react';
import Link from 'next/link';

import { Box, Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { CardProps } from './types';

export const CardMenu = ({ link, title, description }: CardProps) => {
  return (
    <Box
      padding='20px'
      borderWidth={1}
      h='150px'
      w='270px'
      boxShadow='md'
      rounded='md'
    >
      <Link href={link}>
        <Button
          variant='link'
          justifyContent='center'
          alignItems='center'
          color='black'
        >
          <Text fontSize='xl' fontWeight='bold'>
            {title}
          </Text>
          <ArrowForwardIcon marginLeft={2} />
        </Button>
      </Link>
      <Text marginTop={4} fontSize={16}>
        {description}
      </Text>
    </Box>
  );
};

export default CardMenu;
