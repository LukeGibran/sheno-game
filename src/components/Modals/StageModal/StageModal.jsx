import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Components
import Banner from "../../Customs/Banner/Banner";

// Redux Selector
import { stageModal } from "../../../redux/user/user.selector";

// Redux Action
import { toggleStageModal } from "../../../redux/user/user.actions";

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

import { GiExitDoor } from "react-icons/gi";

const StageModal = ({ setPage, stageModal, toggleStageModal }) => {
  return (
    <Modal
      isCentered
      isOpen={stageModal}
      motionPreset="slideInRight"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent bg={"green.500"}>
        <ModalHeader
          bg={"green.500"}
          borderTopStartRadius="2xl"
          borderTopEndRadius="2xl"
          p={0}
        >
          <Box my={"1rem"} px={"5rem"}>
            <Banner message="Hooray!" />
          </Box>
        </ModalHeader>
        <ModalBody
          bg={"green.500"}
          pb={"1rem"}
          borderBottomStartRadius="2xl"
          borderBottomEndRadius="2xl"
        >
          <Text
            fontSize={{ base: "3rem", lg: "5rem" }}
            mb={{ base: ".5rem", lg: "1rem" }}
            d={"flex"}
            justifyContent={'center'}
            alignItems={'center'}
          >
            🌟 🌟 🌟
          </Text>
          <Text
            fontSize={{ base: ".9rem", lg: "1rem" }}
            color={"yellow.400"}
            mb={{ base: ".5rem", lg: "1rem" }}
          >
            Stage Cleared!
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
            onClick={() => {
              toggleStageModal();
              setPage();
            }}
          >
            Next Stage
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  stageModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleStageModal: () => dispatch(toggleStageModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StageModal);
