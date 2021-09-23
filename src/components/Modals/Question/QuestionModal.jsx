import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux Selector
import { isQuestionModalOpen } from '../../../redux/question/question.selector';

// Redux Actions
import {
  toggleQuestionModal,
  toggleRationaleModal,
} from '../../../redux/question/question.actions';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  List,
} from '@chakra-ui/react';

import QuestionItem from './QuestionItem';

const QuestionModal = ({ toggleModal, toggleRModal, isModalOpen }) => {
  const openRationaleModal = () => {

    setTimeout(() => {
      toggleModal();
    }, 1500);

    setTimeout(() => {
      toggleRModal();
    }, 2000);
  };

  return (
    <>
      <Modal
        isCentered
        onClose={toggleModal}
        isOpen={isModalOpen}
        motionPreset='slideInBottom'
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
            <Text
              fontSize={{ base: '1.8rem', lg: '2.5rem' }}
              color={'white'}
              textShadow='3px 3px #815a00'
            >
              #1
            </Text>
          </ModalHeader>
          <ModalCloseButton
            bg={'green.600'}
            color='white'
            boxShadow='3px 3px #fff'
            transition='all .3s linear'
            _hover={{ boxShadow: 'none', transform: 'translate(1px, 2px)' }}
            onClick={() => toggleModal}
          />
          <ModalBody bg={'yellow.200'} pb={'1rem'}>
            <Text
              fontSize={{ base: '.8rem', lg: '1rem' }}
              color={'green.700'}
              mb={{ base: '.5rem', lg: '1rem' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
              odit suscipit magni, eveniet adipisci consequatur corrupti itaque
              sed, iusto exercitationem vero eligendi beatae ipsa, accusamus
              cumque unde quam. Magni?
            </Text>
            <List spacing={3}>
              <QuestionItem openRationaleModal={openRationaleModal} />
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: isQuestionModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleQuestionModal()),
  toggleRModal: () => dispatch(toggleRationaleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal);
