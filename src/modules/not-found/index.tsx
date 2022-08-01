import React from 'react';
import { Flex, Text, Divider, Box, LinkBox, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

const NotFoundModule = () => {
  return (
    <Flex
      width='100%'
      minHeight='90vh'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Text
          fontFamily='heading'
          fontSize='4xl'
          lineHeight={1}
          fontWeight='bold'
        >
          Page not found
        </Text>
        <Divider marginTop={8} />
        <Flex alignItems='center' justifyContent='center' marginTop={8}>
          <ArrowBackIcon marginRight={2} />
          <Button variant='link' color='black' fontWeight='medium'>
            <Link href='/'>Back to home</Link>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NotFoundModule;
