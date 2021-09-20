import React from 'react';
import { Formik, Form, Field } from 'formik';

import Banner from '../components/customs/Banner/Banner';

import {
  Button,
  Flex,
  Box,
  Input,
  FormControl,
  Stack,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

const HomePage = () => (
  <Flex minH={'100vh'} align={'center'} justify={'center'} py={12}>
    <Stack
      boxShadow={'2xl'}
      bg='yellow.500'
      rounded={'xl'}
      p={5}
      spacing={8}
      align={'center'}
      h={400}
      w={{ base: '90%', md: '50%', lg: '35%' }}
    >
      <Box
        bg='yellow.200'
        borderRadius='lg'
        p={2}
        h={400}
        w={'100%'}
        maxW={'100%'}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Stack align={'center'} pos='relative' spacing={2} h={20} w={200}>
          <Banner message='welcome' />
        </Stack>
        <Stack align={'center'} pos='relative' spacing={2} h={20} w={'full'}>
          <Text
            fontSize={{ base: '1.5rem', lg: '2.5rem' }}
            fontWeight={'bold'}
            textShadow='2px 4px 0 #fff'
            color={'green.700'}
          >
            Enter your Name
          </Text>
        </Stack>
        <Stack
          spacing={4}
          direction={{ base: 'column' }}
          w={'full'}
          paddingX={'1rem'}
        >
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => (
              <Form>
                <Field name='name'>
                  {({ field }) => (
                    <FormControl>
                      <Input
                        type={'text'}
                        placeholder={'your name...'}
                        color={useColorModeValue('gray.800', 'gray.200')}
                        bg={useColorModeValue('gray.100', 'gray.600')}
                        rounded={'full'}
                        border={0}
                        _focus={{
                          bg: useColorModeValue('gray.200', 'gray.800'),
                          outline: 'none',
                        }}
                        {...field}
                        mb={3}
                      />
                    </FormControl>
                  )}
                </Field>
                <Button
                  bg={'green.600'}
                  rounded={'full'}
                  color={'white'}
                  flex={'1 0 auto'}
                  _hover={{ bg: 'green.500' }}
                  _focus={{ bg: 'green.500' }}
                  type={'submit'}
                  width={'full'}
                >
                  Enter
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Box>
    </Stack>
  </Flex>
);

export default HomePage;
