import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Actions
import { setLostLife } from "../redux/user/user.actions";

// Redux Selectors
import {
  currentPage,
  currentQuestion,
  maxPage,
} from "../redux/question/question.selector";
import { getCurrentLife, hasLostLife } from "../redux/user/user.selector";

// Icons
import { ImHeartBroken, ImHeart } from "react-icons/im";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";

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

const Play = ({
  page,
  maxPage,
  currentLife,
  setLostLife,
  hasLostLife,
  setPage,
  currentQuestion,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (hasLostLife) {
      LifeToast("You just lost a life! 💔");
      setLostLife();
    }
  }, [currentLife]);

  const LifeToast = (title, status) => {
    toast({
      position: "top-right",
      isClosable: true,
      duration: 3000,
      render: () => (
        <Box
          color="white"
          p={3}
          bg="red.200"
          borderRadius="5px"
          borderBottom={"5px solid"}
          borderColor={"red.500"}
          fontWeight={"bold"}
          d={"flex"}
          alignItems={"center"}
        >
          <Icon as={FaExclamationCircle} mr={1} /> {title}
        </Box>
      ),
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
              <Text color={"white"}> {currentQuestion - 1}/25</Text>
            </Box>
          </Stack>
          <Stack
            align={"center"}
            pos="relative"
            spacing={2}
            h={20}
            w={"full"}
            justify="center"
          >
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
  currentQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  setLostLife: () => dispatch(setLostLife()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
