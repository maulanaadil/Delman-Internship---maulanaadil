import React, { useState } from 'react';

import {
  Flex,
  Box,
  Text,
  Divider,
  Button,
  Avatar,
  SkeletonText,
} from '@chakra-ui/react';

import { initialisLoadingState } from './utils';
import { TUser } from '@/types/user';

export const UserFetcherModule = () => {
  const [data, setData] = useState<TUser>([]);
  const [isLoading, setLoading] = useState(initialisLoadingState);

  const fetcher = async () => {
    const res = await fetch(`https://randomuser.me/api`);
    const data = await res.json();
    setLoading({ label: 'Refetch User', loading: false });
    return setData(data.results);
  };

  const fetchingHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading({
      label: 'Refetch User',
      loading: !isLoading.loading,
    });
    fetcher();
  };

  return (
    <Flex
      width='100%'
      minHeight='90vh'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Text
          fontFamily='heading'
          fontSize='4xl'
          lineHeight={1}
          fontWeight='bold'
        >
          User Fetcher
        </Text>
        <Divider marginTop={8} marginBottom={12} />
        {data.length ? (
          data.map((item, index) => (
            <Box
              key={index}
              display='flex'
              flexDirection='column'
              padding={8}
              justifyContent='center'
              alignItems='center'
              border='1px'
              borderRadius={8}
              borderColor={item.gender === 'male' ? 'blue.100' : 'pink.100'}
              boxShadow={'2xl'}
            >
              <Flex w='206px' justifyContent='center'>
                <Avatar size='xl' src={item.picture.medium} />
              </Flex>
              <Text
                fontSize='lg'
                fontWeight='medium'
                marginTop={4}
              >{`${item.name.first} ${item.name.last}`}</Text>
              <Text fontSize='md' color='gray.500' marginTop={3}>
                {item.email}
              </Text>
              <Flex
                marginTop={5}
                gap={4}
                justifyContent='space-around'
                w='100%'
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Text fontSize='lg' fontWeight='medium'>
                    {item.nat}
                  </Text>
                  <Text fontSize='md' color='gray.500'>
                    Nationality
                  </Text>
                </Box>
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Text fontSize='lg' fontWeight='medium'>
                    {item.dob.age}
                  </Text>
                  <Text fontSize='md' color='gray.500'>
                    Age
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))
        ) : (
          <Box
            display='flex'
            flexDirection='column'
            padding={8}
            justifyContent='center'
            alignItems='center'
            border={1}
            borderRadius={8}
            boxShadow={'2xl'}
          >
            <Flex w='206px' justifyContent='center'>
              <Avatar size='xl' src='' />
            </Flex>
            <SkeletonText w='100%' mt='5' noOfLines={8} spacing={3} />
          </Box>
        )}
        <Divider marginTop={12} marginBottom={8} />
        <Button
          colorScheme='gray'
          w='100%'
          onClick={fetchingHandler}
          isLoading={isLoading.loading}
        >
          {isLoading.label}
        </Button>
      </Box>
    </Flex>
  );
};

export default UserFetcherModule;
