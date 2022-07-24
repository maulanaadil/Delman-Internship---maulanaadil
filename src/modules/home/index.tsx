import React from 'react';

import { Flex, Text, Box, Divider } from '@chakra-ui/react';

import CardMenu from './components/card-menu';
import { menuData } from '@/utils/data';

export const HomeModule = () => {
  return (
    <Flex
      width='100%'
      minHeight='90vh'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box display='flex' flexDirection='column'>
        <Text
          fontSize='4xl'
          fontWeight='bold'
          lineHeight='1.2'
          textAlign={'center'}
        >
          Internship Program
        </Text>
        <Divider marginTop={8} />
        <Box as='div' display='flex' marginTop={8} gap={8}>
          {menuData.map((item) => (
            <CardMenu
              key={item.link}
              link={item.link}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeModule;
