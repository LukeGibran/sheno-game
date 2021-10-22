import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Selector
import {
  isQuestionModalOpen,
  currentQuestion,
  allQuestions,
} from "../../../redux/question/question.selector";
import {
  getCurrentLife,
  currentStreak,
  currentFiveStreak,
} from "../../../redux/user/user.selector";

// Redux Actions
import {
  toggleQuestionModal,
  toggleRationaleModal,
  isAnswerCorrect,
  setCurrAnsPicked
} from "../../../redux/question/question.actions";
import {
  updateLife,
  setLostLife,
  setStreak,
  setFiveStreak,
} from "../../../redux/user/user.actions";

//  Chakra UI
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  List,
} from "@chakra-ui/react";

import QuestionItem from "./QuestionItem";

const QuestionModal = ({
  toggleModal,
  toggleRModal,
  isModalOpen,
  currentQuestion,
  isAnswerCorrect,
  allQuestions,
  currentLife,
  updateLife,
  setLostLife,
  currentFiveStreak,
  currentStreak,
  setFiveStreak,
  setStreak,
  setCurrAnsPicked,
}) => {
  const openRationaleModal = (val, ans_picked) => {
    isAnswerCorrect(val);
    setCurrAnsPicked(ans_picked)

    if (val) {
      setFiveStreak(currentFiveStreak + 1)
      setStreak(currentStreak + 1)
    }

    if (!val) {
      updateLife(currentLife - 1);
      setLostLife();
      setFiveStreak(0)
      setStreak(0)
    }

    setTimeout(() => {
      toggleModal();
    }, 3000);

    setTimeout(() => {
      toggleRModal();
    }, 3500);
  };

  const { question, question_no, correct_ans, answers, status, answered } =
    allQuestions[currentQuestion - 1];

  return (
    <>
      <Modal
        isCentered
        onClose={toggleModal}
        isOpen={isModalOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent
          bg={
            status === "available"
              ? "yellow.500"
              : status === "correct"
              ? "blue.500"
              : "red.500"
          }
        >
          <ModalHeader
            bg={
              status === "available"
                ? "yellow.200"
                : status === "correct"
                ? "blue.200"
                : "red.200"
            }
            borderTopStartRadius="2xl"
            borderTopEndRadius="2xl"
            color={"green.700"}
            p={0}
            textAlign={"center"}
          >
            {status === "available" ? (
              <Text
                fontSize={{ base: "1.8rem", lg: "2.5rem" }}
                color={"white"}
                textShadow="3px 3px #815a00"
              >
                #{question_no}
              </Text>
            ) : status === "correct" ? (
              <Text
                fontSize={{ base: "1.8rem", lg: "2.5rem" }}
                color={"white"}
                textShadow="3px 3px #815a00"
              >
                🏅
              </Text>
            ) : (
              <Text
                fontSize={{ base: "1.8rem", lg: "2.5rem" }}
                color={"white"}
                textShadow="3px 3px #815a00"
              >
                😞
              </Text>
            )}
          </ModalHeader>
          {status === "available" && (
            <ModalCloseButton
              bg={"green.600"}
              color="white"
              boxShadow="3px 3px #fff"
              transition="all .3s linear"
              _hover={{ boxShadow: "none", transform: "translate(1px, 2px)" }}
              onClick={() => toggleModal}
            />
          )}

          <ModalBody
            pb={"1rem"}
            bg={
              status === "available"
                ? "yellow.200"
                : status === "correct"
                ? "blue.200"
                : "red.200"
            }
            borderBottomStartRadius="2xl"
            borderBottomEndRadius="2xl"
          >
            <Text
              fontSize={
                status === "available"
                  ? { base: ".8rem", lg: "1rem" }
                  : { base: "1.5rem" }
              }
              color={status === "available" ? "green.700" : "white"}
              mb={{ base: ".5rem", lg: "1rem" }}
            >
              {status === "available"
                ? question
                : status === "correct"
                ? "Correct!"
                : "Aww Snap!"}
            </Text>
            <List spacing={3}>
              <QuestionItem
                openRationaleModal={openRationaleModal}
                answers={answers}
                correctAns={correct_ans}
                answered={answered}
                status={status}
              />
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: isQuestionModalOpen,
  currentQuestion,
  allQuestions,
  currentLife: getCurrentLife,
  currentFiveStreak,
  currentStreak,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleQuestionModal()),
  toggleRModal: () => dispatch(toggleRationaleModal()),
  isAnswerCorrect: (val) => dispatch(isAnswerCorrect(val)),
  updateLife: (val) => dispatch(updateLife(val)),
  setLostLife: () => dispatch(setLostLife()),
  setStreak: (val) => dispatch(setStreak(val)),
  setFiveStreak: (val) => dispatch(setFiveStreak(val)),
  setCurrAnsPicked: (val) => dispatch(setCurrAnsPicked(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal);
