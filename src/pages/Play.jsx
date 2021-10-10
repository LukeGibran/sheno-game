import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux Actions
import { setCurrentPage } from '../redux/question/question.actions';
import { setLostLife } from '../redux/user/user.actions';

// Redux Selectors
import { currentPage, maxPage } from '../redux/question/question.selector';
import { getCurrentLife, hasLostLife } from '../redux/user/user.selector';

// Icons
import { ImHeartBroken, ImHeart } from 'react-icons/im';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

// Chakra
import { Flex, Box, Stack, Icon, Text, useToast } from '@chakra-ui/react';

// Components
import CardLevel from '../components/CardLevel/CardLevel';
import QuestionModal from '../components/Modals/Question/QuestionModal';
import RationaleModal from '../components/Modals/Rationale/RationaleModal';

const Play = ({
  setCurrentPage,
  page,
  maxPage,
  currentLife,
  setLostLife,
  hasLostLife,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (hasLostLife) {
      LifeToast('You lost a life! 😞', 'error');
      setLostLife();
    }
  }, [currentLife]);

  const LifeToast = (title, status) => {
    toast({
      title,
      position: 'top-right',
      isClosable: true,
      status,
      duration: 3000,
    });
  };
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
                <Icon as={ImHeart} color={'red.500'} mr={1} />x {currentLife}
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
            <Box
              d={{ base: 'none', lg: 'flex' }}
              alignItems='center'
              justifyContent='center'
              h={20}
            >
              <Text
                fontSize={'1.8rem'}
                cursor={'pointer'}
                onClick={() => setCurrentPage(page - 1)}
                visibility={page !== 1 ? 'visible' : 'hidden'}
              >
                <Icon color={'yellow.500'} as={IoIosArrowBack} />
              </Text>
              <Text fontSize={'2rem'}>{page}</Text>
              <Text
                fontSize={'1.8rem'}
                cursor={'pointer'}
                onClick={() => setCurrentPage(page + 1)}
                visibility={page !== maxPage ? 'visible' : 'hidden'}
              >
                <Icon color={'yellow.500'} as={IoIosArrowForward} />
              </Text>
            </Box>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: 'column' }}
            w={'full'}
            h={'full'}
            justify={{ base: 'flex-start', lg: 'flex-start' }}
            alignItems={'center'}
          >
            <QuestionModal />
            <RationaleModal />
            <CardLevel />
            <Box
              d={{ base: 'flex', lg: 'none' }}
              alignItems='center'
              justifyContent='center'
            >
              <Text
                fontSize={'1.5rem'}
                cursor={'pointer'}
                onClick={() => setCurrentPage(page - 1)}
                visibility={page !== 1 ? 'visible' : 'hidden'}
              >
                <Icon color={'yellow.500'} as={IoIosArrowBack} />
              </Text>
              <Text fontSize={'1.5rem'}>{page}</Text>
              <Text fontSize={'1.5rem'}>
                <Icon
                  color={'yellow.500'}
                  as={IoIosArrowForward}
                  onClick={() => setCurrentPage(page + 1)}
                  visibility={page !== maxPage ? 'visible' : 'hidden'}
                />
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const mapStateToProps = createStructuredSelector({
  page: currentPage,
  maxPage: maxPage,
  currentLife: getCurrentLife,
  hasLostLife,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  setLostLife: () => dispatch(setLostLife()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
