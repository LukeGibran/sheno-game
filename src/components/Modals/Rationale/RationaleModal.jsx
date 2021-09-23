import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux Selectors
import { isRationaleModalOpen } from '../../../redux/question/question.selector';

// Redux Actions
import { toggleRationaleModal } from '../../../redux/question/question.actions';

// Components
import Banner from '../../Customs/Banner/Banner';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';

const RationaleModal = ({ isModalOpen, toggleRModal }) => {
  const [isNextAvailable, setIsNextAvailable] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      setIsNextAvailable(false);
      setTimer(5);
      setCountDown();
    }
  }, [isModalOpen]);

  const setCountDown = () => {
    let newTime = 5;

    const countdown = setInterval(() => {
      newTime = newTime - 1;
      setTimer(newTime);
    }, 1000);

    setTimeout(() => {
      setIsNextAvailable(true);
      clearInterval(countdown);
    }, 6000);
  };
  return (
    <Modal
      isCentered
      onClose={toggleRModal}
      isOpen={isModalOpen}
      motionPreset='slideInRight'
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent bg={'yellow.500'}>
        <ModalHeader
          bg={'yellow.200'}
          borderTopStartRadius='2xl'
          color={'green.700'}
          p={0}
        >
          <Box my={'1rem'} px={'5rem'}>
            <Banner message='Rationale' />
          </Box>
        </ModalHeader>
        {isNextAvailable && (
          <ModalCloseButton
            bg={'green.600'}
            color='white'
            boxShadow='3px 3px #fff'
            transition='all .3s linear'
            _hover={{ boxShadow: 'none', transform: 'translate(1px, 2px)' }}
            onClick={() => toggleRModal}
          />
        )}

        <ModalBody bg={'yellow.200'} pb={'1rem'}>
          <Text
            fontSize={{ base: '.9rem', lg: '1rem' }}
            color={'green.700'}
            mb={{ base: '.5rem', lg: '1rem' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
            odit suscipit magni, eveniet adipisci consequatur corrupti itaque
            sed, iusto exercitationem vero eligendi beatae ipsa, accusamus
            cumque unde quam. Magni?
          </Text>
        </ModalBody>
        <ModalFooter
          bg={'yellow.200'}
          borderBottomEndRadius='2xl'
          borderBottomStartRadius='2xl'
        >
          <Button
            bg={'green.600'}
            color='white'
            boxShadow='4px 4px #fff'
            transition='all .3s linear'
            _hover={{ boxShadow: 'none', transform: 'translate(1px, 2px)' }}
            disabled={!isNextAvailable}
            onClick={() => console.log('heyy')}
          >
            {isNextAvailable ? 'Next' : timer}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: isRationaleModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleRModal: () => dispatch(toggleRationaleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RationaleModal);
