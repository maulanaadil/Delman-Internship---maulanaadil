import React, { useEffect, useRef, useState } from 'react';

import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';

export const TitleTransformerModule = () => {
  const [data, setData] = useState<String[]>(['Internship Program']);
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick: any = useRef();

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
      tick.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const addTitleDataHandler = () => {
    setData((state) => [...state, 'Internship Program']);
  };

  const removeTitleDataHandler = () => {
    setData([...data.slice(1, data.length)]);
  };

  const randomizeColorHandler = () => {
    setStart(!start);
  };

  const randomColorAnjay = (index: number) => {
    if (!start) {
      return `rgb(0, 0, 0)`;
    } else {
      let r = Math.floor(Math.random() * 256 * index);
      let g = Math.floor(Math.random() * 256 * index);
      let b = Math.floor(Math.random() & (256 * index));
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  return (
    <Flex
      width='100%'
      minHeight='90vh'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box display='flex' flexDirection='column' alignItems='center'>
        {data.map((item, index) => (
          <Text
            fontSize='4xl'
            lineHeight='1.2'
            fontWeight='bold'
            key={index}
            marginTop={8}
            style={{ color: randomColorAnjay(index + 1) }}
          >
            {item} - {index + 1}
          </Text>
        ))}
        <Divider marginTop={8} />
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          padding={3}
        >
          <Text fontSize='medium'>Running for: {timer}s</Text>
          <Divider orientation='vertical' h='20px' margin='0 8px' />
          <Text fontSize='medium'>Title count: {data.length}</Text>
        </Box>
        <Divider />
        <Flex gap={8} marginTop={3}>
          <Button colorScheme='gray' onClick={randomizeColorHandler}>
            {!start ? 'Randomize color' : 'Clear color'}
          </Button>
          <Button
            colorScheme='gray'
            onClick={addTitleDataHandler}
            isDisabled={data.length >= 5 ? true : false}
          >
            Add title
          </Button>
          <Button
            colorScheme='gray'
            onClick={removeTitleDataHandler}
            isDisabled={data.length <= 1 ? true : false}
          >
            Remove title
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TitleTransformerModule;
