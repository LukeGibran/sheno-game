import React from "react";

import { Box, Icon } from "@chakra-ui/react";

import { FaExclamationCircle } from "react-icons/fa";

const ToastBox = ({ color, title }) => {
  return (
    <Box
      color="white"
      p={3}
      bg={`${color}.200`}
      borderRadius="5px"
      borderBottom={"5px solid"}
      borderColor={`${color}.500`}
      fontWeight={"bold"}
      d={"flex"}
      alignItems={"center"}
    >
      <Icon as={FaExclamationCircle} mr={1} /> {title}
    </Box>
  );
};

export default ToastBox;
