import React from "react";
import { Box, Text } from "@chakra-ui/react";
// import pac from "../../assets/images/pac.svg";
import erwin from '../../assets/images/erwin.gif';
import retreat from '../../assets/images/retreat.gif'

const Loader = ({ message, forward }) => {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      pos={"absolute"}
      top={0}
      right={0}
      bg={"black"}
      d={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={100}
    >
      {/* <img src={pac} alt="loader" style={{ transform: !forward && "scaleX(-1)" }} /> */}
      {forward ? (
        <img
          src={erwin}
          alt="loader"
          style={{ transform: "scaleX(-1)" }}
        />
      ) : (
        <img
          src={retreat}
          alt="loader"
          style={{ transform: "scaleX(-1)" }}
        />
      )}
      <Text fontSize={"2rem"} mt={3} fontWeight={"800"} color={"yellow.600"}>
        {message}
      </Text>
    </Box>
  );
};

export default Loader;
