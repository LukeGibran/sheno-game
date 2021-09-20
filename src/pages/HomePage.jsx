import React from 'react';
import { useEffect } from 'react';

import { ImHeartBroken, ImHeart } from 'react-icons/im';

import {
  Button,
  Flex,
  Box,
  Input,
  FormControl,
  Stack,
  useColorModeValue,
  Text,
  Icon,
} from '@chakra-ui/react';

import CardLevel from '../components/CardLevel/CardLevel';

const HomePage = ({ history }) => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={{ base: 0, lg: 12 }}
    >
      <Stack
        boxShadow={'2xl'}
        bg='yellow.500'
        rounded={'xl'}
        p={5}
        spacing={8}
        align={'center'}
        h={{ base: 500, lg: 800 }}
        w={{ base: '90%', md: '50%', lg: '75%' }}
      >
        <Box
          bg='yellow.200'
          borderRadius='lg'
          p={2}
          h={'100%'}
          w={'100%'}
          maxW={'100%'}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='flex-start'
        >
          <Stack
            direction='row'
            align={'center'}
            justifyContent='space-around'
            pos='relative'
            spacing={4}
            h={10}
            w={'100%'}
            mb={3}
          >
            <Box
              d='flex'
              bg='green.600'
              rounded={'lg'}
              py={1}
              px={3}
              style={{ boxShadow: '3px 3px 0 #fff' }}
            >
              <Text color={'white'}>
                <Icon as={ImHeart} color={'red.500'} mr={1} />x 3
              </Text>
            </Box>
            <Box
              d='flex'
              bg='green.600'
              rounded={'lg'}
              py={1}
              px={3}
              style={{ boxShadow: '3px 3px 0 #fff' }}
            >
              <Text d={{ base: 'none', lg: 'block' }} color={'white'} mr={1}>
                Level Completed
              </Text>
              <Text color={'white'}> 0/25</Text>
            </Box>
          </Stack>
          <Stack
            align={'center'}
            pos='relative'
            spacing={2}
            h={20}
            w={'full'}
            justify='center'
          >
            <Text
              fontSize={{ base: '1.5rem', lg: '2.5rem' }}
              fontWeight={'bold'}
              textShadow='2px 4px 0 #fff'
              color={'green.700'}
            >
              All Levels
            </Text>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: 'column' }}
            w={'full'}
            h={'full'}
            justify={{ base: 'flex-start', lg: 'center' }}
            alignItems={'center'}
          >
            <CardLevel />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default HomePage;
