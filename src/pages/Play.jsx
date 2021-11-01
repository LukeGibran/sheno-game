import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Actions
import {
  setLostLife,
  setGainLife,
  updateLife,
  setFiveStreak,
  toggeWelcomeModal,
  setSoundNum,
  toggleSoundEffect,
} from "../redux/user/user.actions";

// Redux Selectors
import {
  currentPage,
  currentQuestion,
  maxPage,
} from "../redux/question/question.selector";
import {
  getCurrentLife,
  hasLostLife,
  hasGainLife,
  currentStreak,
  currentFiveStreak,
  welcomeModal,
} from "../redux/user/user.selector";

// Icons
import { ImHeart } from "react-icons/im";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Chakra
import {
  Flex,
  Box,
  Stack,
  Icon,
  Text,
  useToast,
  Button,
} from "@chakra-ui/react";

// Components
import CardLevel from "../components/CardLevel/CardLevel";
import QuestionModal from "../components/Modals/Question/QuestionModal";
import RationaleModal from "../components/Modals/Rationale/RationaleModal";
import StageModal from "../components/Modals/StageModal/StageModal";
import StartingModal from "../components/Modals/StartingModal/StartingModal";

// Utils
import ToastBox from "../components/utils/ToastBox";

const Play = ({
  page,
  maxPage,
  currentLife,
  setLostLife,
  hasLostLife,
  hasGainLife,
  setPage,
  currentQuestion,
  currentFiveStreak,
  currentStreak,
  updateLife,
  setGainLife,
  setFiveStreak,
  toggeWelcomeModal,
  welcomeModal,
  setSoundNum,
  toggleSoundEffect,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (hasLostLife) {
      customToast("You just lost a life! 💔", "red");
      setLostLife();
    }

    if (hasGainLife) {
      customToast("You just earned a life! 💓", "blue");
      setGainLife();
      setSoundNum(2);
      toggleSoundEffect(true);
    }
  }, [currentLife]);

  useEffect(() => {
    if (currentFiveStreak === 3) {
      updateLife(currentLife + 1);
      setGainLife();
      setFiveStreak(0);
    }
  }, [currentFiveStreak]);

  useEffect(() => {
    if (currentStreak >= 3) {
      const arr = [
        "Way to go! 💯",
        "Keep the fire burning! 🔥",
        "And another one! 🤟",
        "Sana All! 😍",
      ];
      customToast(`${arr[Math.floor(Math.random() * arr.length)]}`, "green");
    }
  }, [currentStreak]);

  const customToast = (title, color) => {
    toast({
      position: "top-right",
      isClosable: true,
      duration: 4000,
      render: () => <ToastBox color={color} title={title} />,
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      py={{ base: 0, lg: 12 }}
    >
      <Stack
        bg="transparent"
        rounded={"xl"}
        p={5}
        spacing={8}
        align={"center"}
        h={{ base: 500, lg: 800 }}
        w={{ base: "90%", md: "50%", lg: "75%" }}
      >
        <Box
          bg="transparent"
          borderRadius="lg"
          p={2}
          h={"100%"}
          w={"100%"}
          maxW={"100%"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Stack
            direction="row"
            align={"center"}
            justifyContent="space-around"
            pos="relative"
            spacing={4}
            h={10}
            w={"100%"}
            mb={3}
          >
            <Box
              d="flex"
              bg="green.600"
              rounded={"lg"}
              py={1}
              px={3}
              style={{ boxShadow: "3px 3px 0 #fff" }}
            >
              <Text color={"white"}>
                <Icon as={ImHeart} color={"red.500"} mr={1} />x {currentLife}
              </Text>
            </Box>
            <Box
              d="flex"
              bg="green.600"
              rounded={"lg"}
              py={1}
              px={3}
              style={{ boxShadow: "3px 3px 0 #fff" }}
            >
              <Text d={{ base: "none", lg: "block" }} color={"white"} mr={1}>
                Level Completed
              </Text>
              <Text color={"white"}> {currentQuestion - 1}/20</Text>
            </Box>
          </Stack>
          <Stack
            align={"center"}
            pos="relative"
            spacing={2}
            h={20}
            w={"full"}
            justify="center"
            pos={"relative"}
          >
            {currentStreak >= 3 && (
              <Box
                pos={"absolute"}
                top={0}
                left={{ base: -5, lg: 130 }}
                height={"100%"}
              >
                <Text
                  fontSize={{ base: "2rem", lg: "4rem" }}
                  fontWeight={"bold"}
                  color="yellow.400"
                  fontFamily={"'Cinzel Decorative', cursive"}
                >
                  {currentStreak}! 🔥
                </Text>
                <Text
                  float={"left"}
                  color="red.400"
                  fontFamily={"'Cinzel Decorative', cursive"}
                  textShadow="2px 1px 0 #fff"
                  transform={"rotate(-10deg)"}
                  marginTop={{ base: "-20px", lg: "-30px" }}
                  fontSize={{ base: "0.4rem", lg: "1rem" }}
                >
                  streak
                </Text>
              </Box>
            )}
            <Text
              fontSize={{ base: "1.5rem", lg: "2.5rem" }}
              fontWeight={"bold"}
              textShadow="2px 4px 0 #fff"
              color={"green.700"}
            >
              All Levels
            </Text>
            <Box
              d={{ base: "none", lg: "flex" }}
              alignItems="center"
              justifyContent="center"
              h={20}
            >
              <Button
                bg={"green.600"}
                color={"white"}
                onClick={() => setPage(page - 1)}
                disabled={page !== 1 ? false : true}
                borderRadius={"0"}
                _hover={{ bg: "green.500" }}
                _focus={{ bg: "green.600" }}
                cursor={"pointer"}
              >
                <Icon fontSize={"1.8rem"} color={"white"} as={IoIosArrowBack} />
              </Button>
              <Box padding={".12rem 1rem"} bg={"green.600"}>
                <Text color={"white"} fontSize={"1.5rem"}>
                  {page}
                </Text>
              </Box>
              <Button
                bg={"green.600"}
                color={"white"}
                cursor={"pointer"}
                onClick={() => setPage(page + 1)}
                borderRadius={"0"}
                _hover={{ bg: "green.500" }}
                _focus={{ bg: "green.600" }}
                disabled={page !== maxPage ? false : true}
              >
                <Icon
                  fontSize={"1.8rem"}
                  color={"white"}
                  as={IoIosArrowForward}
                />
              </Button>
            </Box>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column" }}
            w={"full"}
            h={"full"}
            justify={{ base: "flex-start", lg: "flex-start" }}
            alignItems={"center"}
          >
            <QuestionModal />
            <RationaleModal />
            <StageModal setPage={() => setPage(page + 1)} />
            <StartingModal
              isModalOpen={welcomeModal}
              closeWelcomeModal={() => toggeWelcomeModal()}
            />
            <CardLevel />
            <Box
              d={{ base: "flex", lg: "none" }}
              alignItems="center"
              justifyContent="center"
              pt={"2rem"}
            >
              <Button
                bg={"green.600"}
                color={"white"}
                onClick={() => setPage(page - 1)}
                disabled={page !== 1 ? false : true}
                borderRadius={"0"}
                cursor={"pointer"}
                _hover={{ bg: "green.500" }}
                _focus={{ bg: "green.600" }}
                size="sm"
              >
                <Icon fontSize={"1.2rem"} color={"white"} as={IoIosArrowBack} />
              </Button>
              <Box padding={".12rem 1rem"} bg={"green.600"}>
                <Text color={"white"} fontSize={"1.2rem"}>
                  {page}
                </Text>
              </Box>
              <Button
                bg={"green.600"}
                color={"white"}
                cursor={"pointer"}
                onClick={() => setPage(page + 1)}
                borderRadius={"0"}
                _hover={{ bg: "green.500" }}
                _focus={{ bg: "green.600" }}
                disabled={page !== maxPage ? false : true}
                size="sm"
              >
                <Icon
                  fontSize={"1.2rem"}
                  color={"white"}
                  as={IoIosArrowForward}
                />
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const mapStateToProps = createStructuredSelector({
  page: currentPage,
  maxPage: maxPage,
  currentLife: getCurrentLife,
  hasLostLife,
  hasGainLife,
  currentQuestion,
  currentStreak,
  currentFiveStreak,
  welcomeModal,
});

const mapDispatchToProps = (dispatch) => ({
  setLostLife: () => dispatch(setLostLife()),
  setGainLife: () => dispatch(setGainLife()),
  updateLife: (val) => dispatch(updateLife(val)),
  setFiveStreak: (val) => dispatch(setFiveStreak(val)),
  toggeWelcomeModal: () => dispatch(toggeWelcomeModal()),
  setSoundNum: (val) => dispatch(setSoundNum(val)),
  toggleSoundEffect: (val) => dispatch(toggleSoundEffect(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
