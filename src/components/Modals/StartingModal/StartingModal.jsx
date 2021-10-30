import React from "react";

// Components
import Banner from "../../Customs/Banner/Banner";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import { GiExitDoor } from "react-icons/gi";

const StartingModal = ({ isModalOpen, closeWelcomeModal }) => {
  return (
    <Modal
      isCentered
      isOpen={isModalOpen}
      motionPreset="slideInRight"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent bg={"purple.500"}>
        <ModalHeader
          bg={"purple.500"}
          borderTopStartRadius="2xl"
          borderTopEndRadius="2xl"
          p={0}
        >
          <Box my={"1rem"} px={"5rem"}>
            <Banner message="Welcome!!!" />
          </Box>
        </ModalHeader>
        <ModalBody
          bg={"purple.500"}
          pb={"1rem"}
          borderBottomStartRadius="2xl"
          borderBottomEndRadius="2xl"
        >
          <Text
            fontSize={{ base: "3rem", lg: "5rem" }}
            mb={{ base: ".5rem", lg: "1rem" }}
            d={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
              😀
          </Text>
          <Text
            fontSize={{ base: ".9rem", lg: "1rem" }}
            color={"yellow.400"}
            mb={{ base: ".5rem", lg: "1rem" }}
          >
              Welcome to Ian's brain! Answer some of the neuron's questions correctly to save his mental health! 😄
          </Text>
          <Button
            bg={"yellow.500"}
            rounded={"full"}
            color={"white"}
            flex={"1 0 auto"}
            _hover={{ bg: "yellow.500" }}
            _focus={{ bg: "yellow.500" }}
            type={"submit"}
            width={"full"}
            rightIcon={<GiExitDoor />}
            onClick={() => closeWelcomeModal()}
          >
              Okay! Let's start!
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StartingModal;
