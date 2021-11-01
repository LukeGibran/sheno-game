import React from "react";
import { Box, Text } from "@chakra-ui/react";
import pac from "../../assets/images/pac.svg";
// import erwin from '../../assets/images/erwin.gif';
// import retreat from '../../assets/images/retreat.gif'

const Loader = ({ message, forward, image = true }) => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      pos={"absolute"}
      top={0}
      right={0}
      bg={"white"}
      d={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={9999}
    >
      <img preload="true" src={pac} alt="loader" style={{ transform: !forward && "scaleX(-1)", visibility: image ? 'visible' : 'hidden' }} />
      {/* {type ? (
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
      )} */}
      <Text fontSize={"2rem"} mt={3} fontWeight={"800"} color={"yellow.600"}>
        {message}
      </Text>
    </Box>
  );
};

export default Loader;
