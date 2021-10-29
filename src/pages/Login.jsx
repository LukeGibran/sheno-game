import React, { useState } from "react";
import { connect } from "react-redux";

import { Formik, Form, Field } from "formik";

// Redux Actions
import { setCurrentUser } from "../redux/user/user.actions";

// Firebase
import { recordUser } from "../firebase/firebase.utils";

import Banner from "../components/Customs/Banner/Banner";

import {
  Button,
  Flex,
  Box,
  Input,
  FormControl,
  Stack,
  useColorModeValue,
  Text,
  useToast,
} from "@chakra-ui/react";

const Login = ({ setCurrentUser, history }) => {
  const [error, setError] = useState({
    message: null,
    show: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} py={12}>
      <Stack
        boxShadow={"2xl"}
        bg="yellow.500"
        rounded={"xl"}
        p={5}
        spacing={8}
        align={"center"}
        h={400}
        w={{ base: "90%", md: "50%", lg: "35%" }}
      >
        <Box
          bg="yellow.200"
          borderRadius="lg"
          p={2}
          h={400}
          w={"100%"}
          maxW={"100%"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Stack align={"center"} pos="relative" spacing={2} h={20} w={200}>
            <Banner message="welcome!" />
          </Stack>
          <Stack align={"center"} pos="relative" spacing={2} h={20} w={"full"}>
            <Text
              fontSize={{ base: "1.5rem", lg: "2.5rem" }}
              fontWeight={"bold"}
              textShadow="2px 4px 0 #fff"
              color={"green.700"}
            >
              Enter your Email
            </Text>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column" }}
            w={"full"}
            paddingX={"1rem"}
          >
            <Formik
              initialValues={{ email: "" }}
              onSubmit={async (values) => {
                setIsLoading(true);
                try {
                  const userRef = await recordUser(values.email);

                  userRef.onSnapshot((snapShot) => {
                    setCurrentUser({ id: snapShot.id, ...snapShot.data() });

                    setIsLoading(false);
                    history.push("/scene");
                  });
                } catch (e) {
                  setIsLoading(false);

                  toast({
                    title: "Ohh Snap! 😢",
                    description: "Please try again",
                    status: "error",
                    position: "top-right",
                    duration: 3500,
                    isClosable: true,
                  });
                }
              }}
            >
              {(props) => (
                <Form>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl>
                        <Input
                          type={"email"}
                          placeholder={"Your email..."}
                          color={useColorModeValue("gray.800", "gray.200")}
                          bg={useColorModeValue("gray.100", "gray.600")}
                          rounded={"full"}
                          border={0}
                          _focus={{
                            bg: useColorModeValue("gray.200", "gray.800"),
                            outline: "none",
                          }}
                          {...field}
                          mb={3}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    bg={"green.600"}
                    rounded={"full"}
                    color={"white"}
                    flex={"1 0 auto"}
                    _hover={{ bg: "green.500" }}
                    _focus={{ bg: "green.500" }}
                    type={"submit"}
                    width={"full"}
                    isLoading={isLoading}
                    loadingText="Entering the game"
                  >
                    Enter
                  </Button>
                </Form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
