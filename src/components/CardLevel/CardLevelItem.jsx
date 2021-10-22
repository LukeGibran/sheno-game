import React from "react";

import { WrapItem, Text, Center, Box } from "@chakra-ui/react";

const CardLevelItem = ({ type, q_no, setTheQuestion }) => {
  const Available = ({ number }) => (
    <WrapItem onClick={() => setTheQuestion(q_no)}>
      <Center
        h={{ base: 55, lg: 150 }}
        w={{ base: 55, lg: 150 }}
        bg={"yellow.600"}
        rounded="lg"
        style={{ boxShadow: "4px 4px 0 #fff", cursor: "pointer" }}
      >
        <Text
          fontSize={{ base: "1.2rem", lg: "2.5rem" }}
          color={"white"}
          textShadow="3px 3px #815a00"
        >
          #{number}
        </Text>
      </Center>
    </WrapItem>
  );
  const Unavailable = ({ number }) => (
    <WrapItem>
      <Center
        h={{ base: 55, lg: 150 }}
        w={{ base: 55, lg: 150 }}
        bg={"gray.500"}
        rounded="lg"
        style={{ boxShadow: "4px 4px 0 #fff", cursor: "not-allowed" }}
      >
        <Text
          fontSize={{ base: "1.2rem", lg: "2.5rem" }}
          color={"white"}
          textShadow="3px 3px #4a5568"
        >
          #{number}
        </Text>
      </Center>
    </WrapItem>
  );
  const Correct = () => (
    <WrapItem>
      <Center
        h={{ base: 55, lg: 150 }}
        w={{ base: 55, lg: 150 }}
        bg={"blue.600"}
        rounded="lg"
        style={{ boxShadow: "4px 4px 0 #fff", cursor: "pointer" }}
      >
        <Box d="flex" flexDirection="column">
          <Text fontSize={{ base: "1.1rem", lg: "2.5rem" }} color={"white"}>
            🏅
          </Text>
          <Text fontSize={{ base: ".5rem", lg: "1.2rem" }} color={"white"}>
            Well done!
          </Text>
        </Box>
      </Center>
    </WrapItem>
  );
  const Wrong = () => (
    <WrapItem>
      <Center
        h={{ base: 55, lg: 150 }}
        w={{ base: 55, lg: 150 }}
        bg={"red.600"}
        rounded="lg"
        style={{ boxShadow: "4px 4px 0 #fff", cursor: "pointer" }}
      >
        <Box d="flex" flexDirection="column">
          <Text fontSize={{ base: "1.1rem", lg: "2.5rem" }} color={"white"}>
            😥
          </Text>
          <Text fontSize={{ base: ".5rem", lg: "1.2rem" }} color={"white"}>
            Aww Snap!
          </Text>
        </Box>
      </Center>
    </WrapItem>
  );

  return (
    <>
      {type === "available" && <Available number={q_no} />}
      {type === "unavailable" && <Unavailable number={q_no} />}
      {type === "correct" && <Correct />}
      {type === "wrong" && <Wrong />}
    </>
  );
};

export default CardLevelItem;
