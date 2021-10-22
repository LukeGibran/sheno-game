import React from "react";

// Components
import Banner from "../../Customs/Banner/Banner";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import { VscDebugRestart } from "react-icons/vsc";

const GameOver = ({ isModalOpen, restartGame }) => {
  return (
    <Modal
      isCentered
      isOpen={isModalOpen}
      motionPreset="slideInRight"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent bg={"red.500"}>
        <ModalHeader
          bg={"red.600"}
          borderTopStartRadius="2xl"
          borderTopEndRadius="2xl"
          color={"green.700"}
          p={0}
        >
          <Box my={"1rem"} px={"5rem"}>
            <Banner message="Game Over" />
          </Box>
          <Text
            fontSize={{ base: "1.8rem", lg: "2.5rem" }}
            color={"white"}
            textShadow="3px 3px #815a00"
          >
            💀
          </Text>
        </ModalHeader>
        <ModalBody
          bg={"red.600"}
          pb={"1rem"}
          borderBottomStartRadius="2xl"
          borderBottomEndRadius="2xl"
        >
          <Text
            fontSize={{ base: ".9rem", lg: "1rem" }}
            color={"white"}
            mb={{ base: ".5rem", lg: "1rem" }}
          >
            Oh no! You ran out of lives!
          </Text>
          <Button
            bg={"green.600"}
            rounded={"full"}
            color={"white"}
            flex={"1 0 auto"}
            _hover={{ bg: "green.500" }}
            _focus={{ bg: "green.500" }}
            type={"submit"}
            width={"full"}
            leftIcon={<VscDebugRestart />}
            onClick={() => restartGame()}
          >
            Restart Game
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameOver;
