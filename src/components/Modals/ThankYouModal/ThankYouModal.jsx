import React from 'react';

// Components
import Banner from '../../Customs/Banner/Banner';

import { MdCheckCircle } from 'react-icons/md';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  Button,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

const SceneEnding = ({ isModalOpen }) => {
  return (
    <Modal
      isCentered
      isOpen={isModalOpen}
      motionPreset='slideInRight'
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent bg={'blue.600'}>
        <ModalHeader
          bg={'blue.600'}
          borderTopStartRadius='2xl'
          borderTopEndRadius='2xl'
          p={0}
        >
          <Box my={'1rem'} px={'5rem'}>
            <Banner message='Thank you!' />
          </Box>
        </ModalHeader>
        <ModalBody
          bg={''}
          pb={'1rem'}
          borderBottomStartRadius='2xl'
          borderBottomEndRadius='2xl'
        >
          <Text
            fontSize={{ base: '1rem', lg: '1.2rem' }}
            color={'yellow.400'}
            mb={{ base: '.5rem', lg: '1rem' }}
          >
            Some tips for you on Social Media Detoxification 😉
          </Text>
          <List spacing={3}>
            <ListItem
              textColor={'white'}
              fontSize={{ base: '.8rem' }}
            >
              <ListIcon as={MdCheckCircle} color='green.500' />
              Tell Others: Spread the word that you’re going on a social media
              detox! This will firstly prevent you from going back on your word,
              and secondly, prevent people from worrying about your absence.
            </ListItem>
            <ListItem
              textColor={'white'}
              fontSize={{ base: '.8rem' }}
            >
              <ListIcon as={MdCheckCircle} color='green.500' />
              Delete Social Media Apps: Delete all the social apps on your
              phone. If you use them on other devices besides your phone,
              activate website blockers to prevent you from reaching them from
              those devices as well.
            </ListItem>
            <ListItem
              textColor={'white'}
              fontSize={{ base: '.8rem' }}
            >
              <ListIcon as={MdCheckCircle} color='green.500' />
              Deactivate Your Accounts: Deleting the apps won’t be enough. This
              step will prevent you from taking a sneak peek at your accounts or
              at least make it harder to do so.
            </ListItem>
            <ListItem
              textColor={'white'}
              fontSize={{ base: '.8rem' }}
            >
              <ListIcon as={MdCheckCircle} color='green.500' />
              Replace Social Media With Another Activity: Explore for yourself!
              Find other activities that will keep your mind away from it. Take
              this time to reconnect with your friends in person. Once you get
              to enjoy real communication, you may never feel the urge to use
              these platforms again.
            </ListItem>
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SceneEnding;
