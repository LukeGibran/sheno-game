import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Selectors
import {
  isRationaleModalOpen,
  currentQuestion,
} from "../../../redux/question/question.selector";
import { getCurrentLife } from "../../../redux/user/user.selector";

// Redux Actions
import {
  toggleRationaleModal,
  toggleQuestionModal,
  setCurrentQuestion,
} from "../../../redux/question/question.actions";


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
} from "@chakra-ui/react";

const RationaleModal = ({
  isModalOpen,
  toggleRModal,
  toggleQModal,
  setCurrentQuestion,
  currentQuestion,
  currentLife,
}) => {
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

  const setNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    toggleRModal();

    setTimeout(() => {
      toggleQModal();
    }, 500);
  };
  if (currentLife === 0) return null;
  return (
    <Modal
      isCentered
      onClose={toggleRModal}
      isOpen={isModalOpen}
      motionPreset="slideInRight"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent bg={"yellow.500"}>
        <ModalHeader
          bg={"yellow.200"}
          borderTopStartRadius="2xl"
          borderTopEndRadius="2xl"
          color={"green.700"}
          p={0}
        >
          <Text
            fontSize={{ base: "1.8rem", lg: "2.5rem" }}
            color={"white"}
            textShadow="3px 3px #815a00"
          >
           🧠 
          </Text>
        </ModalHeader>
        {isNextAvailable && (
          <ModalCloseButton
            bg={"green.600"}
            color="white"
            boxShadow="3px 3px #fff"
            transition="all .3s linear"
            _hover={{ boxShadow: "none", transform: "translate(1px, 2px)" }}
            onClick={() => toggleRModal}
          />
        )}

        <ModalBody bg={"yellow.200"} pb={"1rem"}>
          <Text
            fontSize={{ base: ".9rem", lg: "1rem" }}
            color={"green.700"}
            mb={{ base: ".5rem", lg: "1rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
            odit suscipit magni, eveniet adipisci consequatur corrupti itaque
            sed, iusto exercitationem vero eligendi beatae ipsa, accusamus
            cumque unde quam. Magni?
          </Text>
        </ModalBody>
        <ModalFooter
          bg={"yellow.200"}
          borderBottomEndRadius="2xl"
          borderBottomStartRadius="2xl"
        >
          <Button
            bg={"green.600"}
            color="white"
            boxShadow="4px 4px #fff"
            transition="all .3s linear"
            _hover={{ boxShadow: "none", transform: "translate(1px, 2px)" }}
            disabled={!isNextAvailable}
            onClick={() => setNextQuestion()}
          >
            {isNextAvailable ? "Next" : timer}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: isRationaleModalOpen,
  currentQuestion,
  currentLife: getCurrentLife,
});

const mapDispatchToProps = (dispatch) => ({
  toggleRModal: () => dispatch(toggleRationaleModal()),
  toggleQModal: () => dispatch(toggleQuestionModal()),
  setCurrentQuestion: (val) => dispatch(setCurrentQuestion(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RationaleModal);
