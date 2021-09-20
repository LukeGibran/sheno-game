import React from 'react';

import { Wrap, WrapItem, Text, Center, Box, Icon } from '@chakra-ui/react';

import { GiTrophy } from 'react-icons/gi';
import { ImSad } from 'react-icons/im';

const CardLevel = () => {
  return (
    <Box
      px={{ base: 1, lg: 10 }}
      py={{ base: 0, lg: 5 }}
      overflow='hidden'
      justify='center'
      w={{ base: '100%', md: '80%', lg: '70%' }}
    >
      <Wrap py={3} spacing={{ base: 5, lg: 10 }} justify='center'>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #1
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'blue.500'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Box d='flex' flexDirection='column'>
              <Text fontSize={{ base: '1.1rem', lg: '2.5rem' }} color={'white'}>
                <Icon as={GiTrophy} />
              </Text>
              <Text fontSize={{ base: '.5rem', lg: '1.2rem' }} color={'white'}>
                Well done!
              </Text>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'red.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Box d='flex' flexDirection='column'>
              <Text fontSize={{ base: '1.1rem', lg: '2.5rem' }} color={'white'}>
                <Icon as={ImSad} />
              </Text>
              <Text fontSize={{ base: '.5rem', lg: '1.2rem' }} color={'white'}>
                Aww Snap!
              </Text>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #1
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #17
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #1
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #1
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #1
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            h={{ base: 55, lg: 150 }}
            w={{ base: 55, lg: 150 }}
            bg={'yellow.600'}
            rounded='lg'
            style={{ boxShadow: '4px 4px 0 #fff', cursor: 'pointer' }}
          >
            <Text
              fontSize={{ base: '1.2rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #166563'
            >
              #1
            </Text>
          </Center>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default CardLevel;
