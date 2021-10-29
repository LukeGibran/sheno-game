import React from 'react';

// Components
import Banner from '../../Customs/Banner/Banner';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';


const SceneEnding = ({ isModalOpen  }) => {
  return (
    <Modal
      isCentered
      isOpen={isModalOpen}
      motionPreset='slideInRight'
      closeOnOverlayClick={false}
      
    >
      <ModalOverlay />
      <ModalContent bg={'green.600'}>
        <ModalHeader
          bg={'green.600'}
          borderTopStartRadius='2xl'
          borderTopEndRadius='2xl'
          p={0}
        >
          <Box my={'1rem'} px={'5rem'}>
            <Banner message='Thank you!' />
          </Box>
        </ModalHeader>
        <ModalBody
          bg={'green.600'}
          pb={'1rem'}
          borderBottomStartRadius='2xl'
          borderBottomEndRadius='2xl'
        >
          <Text
            fontSize={{ base: '3rem', lg: '5rem' }}
            mb={{ base: '.5rem', lg: '1rem' }}
            d={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            😁
          </Text>
          <Text
            fontSize={{ base: '1rem', lg: '1.5rem' }}
            color={'yellow.400'}
            mb={{ base: '.5rem', lg: '1rem' }}
          >
              Thank you for participating!
          </Text>
          {/* <Button
            bg={'yellow.500'}
            rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: 'yellow.500' }}
            _focus={{ bg: 'yellow.500' }}
            type={'submit'}
            width={'full'}
            rightIcon={<GiExitDoor />}
            onClick={() => console.log('End Game')}
          >
              Let's Go!
          </Button> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SceneEnding;
