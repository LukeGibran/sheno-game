import React from 'react';

import { ListItem, Text } from '@chakra-ui/react';

const QuestionItem = () => {
  return (
    <>
      <ListItem
        bg={'green.600'}
        color={'white'}
        py={'.5rem'}
        pl={{ base: '.8rem', lg: '2.5rem' }}
        pr={'1rem'}
        rounded={'full'}
        boxShadow='3px 3px 0 #fff'
        d={'flex'}
        justifyContent={'start'}
        alignItems={'center'}
        wordBreak={'break-all'}
        cursor={'pointer'}
        transition={'all .3s ease'}
        _hover={{
          transform: 'translate(-3px,-5px )',
          boxShadow: '6px 6px 0 #fff',
        }}
      >
        <Text
          color={'white'}
          fontSize={{ base: '1rem', lg: '1.2rem' }}
          textShadow={{
            base: '2px 2px 0 #166563',
            lg: '3px 3px 0 #166563',
          }}
          mr='.5rem'
        >
          1
        </Text>
        <Text
          color={'white'}
          textAlign={'start'}
          fontSize={{ base: '.8rem', lg: '1rem' }}
        >
          Lorem Ipsum Dolor sit amet,
        </Text>
      </ListItem>
      <ListItem
        bg={'red.600'}
        color={'white'}
        py={'.5rem'}
        pl={{ base: '.8rem', lg: '2.5rem' }}
        pr={'1rem'}
        rounded={'full'}
        boxShadow='3px 3px 0 #fff'
        d={'flex'}
        justifyContent={'start'}
        alignItems={'center'}
        wordBreak={'break-all'}
        cursor={'pointer'}
        transition={'all .3s ease'}
        _hover={{
          transform: 'translate(-3px,-5px )',
          boxShadow: '6px 6px 0 #fff',
        }}
      >
        <Text
          color={'white'}
          fontSize={{ base: '1rem', lg: '1.2rem' }}
          textShadow={{
            base: '2px 2px 0 #74080b',
            lg: '3px 3px 0 #74080b',
          }}
          mr='.5rem'
        >
          2
        </Text>
        <Text
          color={'white'}
          textAlign={'start'}
          fontSize={{ base: '.8rem', lg: '1rem' }}
        >
          Lorem Ipsum Dolor sit amet,
        </Text>
      </ListItem>
      <ListItem
        bg={'blue.600'}
        color={'white'}
        py={'.5rem'}
        pl={{ base: '.8rem', lg: '2.5rem' }}
        pr={'1rem'}
        rounded={'full'}
        boxShadow='3px 3px 0 #fff'
        d={'flex'}
        justifyContent={'start'}
        alignItems={'center'}
        wordBreak={'break-all'}
        cursor={'pointer'}
        transition={'all .3s ease'}
        _hover={{
          transform: 'translate(-3px,-5px )',
          boxShadow: '6px 6px 0 #fff',
        }}
      >
        <Text
          color={'white'}
          fontSize={{ base: '1rem', lg: '1.2rem' }}
          textShadow={{
            base: '2px 2px 0 #2c5282',
            lg: '3px 3px 0 #2c5282',
          }}
          mr='.5rem'
        >
          3
        </Text>
        <Text
          color={'white'}
          textAlign={'start'}
          fontSize={{ base: '.8rem', lg: '1rem' }}
        >
          Lorem Ipsum Dolor sit amet,
        </Text>
      </ListItem>
      <ListItem
        bg={'green.600'}
        color={'white'}
        py={'.5rem'}
        pl={{ base: '.8rem', lg: '2.5rem' }}
        pr={'1rem'}
        rounded={'full'}
        boxShadow='3px 3px 0 #fff'
        d={'flex'}
        justifyContent={'start'}
        alignItems={'center'}
        wordBreak={'break-all'}
        cursor={'pointer'}
        transition={'all .3s ease'}
        _hover={{
          transform: 'translate(-3px,-5px )',
          boxShadow: '6px 6px 0 #fff',
        }}
      >
        <Text
          color={'white'}
          fontSize={{ base: '1rem', lg: '1.2rem' }}
          textShadow={{
            base: '2px 2px 0 #166563',
            lg: '3px 3px 0 #166563',
          }}
          mr='.5rem'
        >
          4
        </Text>
        <Text
          color={'white'}
          textAlign={'start'}
          fontSize={{ base: '.8rem', lg: '1rem' }}
        >
          Lorem Ipsum Dolor sit amet,
        </Text>
      </ListItem>
    </>
  );
};

export default QuestionItem;
