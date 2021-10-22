import React from "react";

import { Box } from "@chakra-ui/react";


const ToastBox = ({ color, title }) => {
  return (
    <Box
      color="white"
      p={3}
      bg={`${color}.600`}
      borderRadius="5px"
      borderBottom={"5px solid"}
      borderColor={`${color}.700`}
      fontWeight={"bold"}
      d={"flex"}
      alignItems={"center"}
    >
      {title}
    </Box>
  );
};

export default ToastBox;
