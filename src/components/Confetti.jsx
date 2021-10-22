import React, { useEffect } from "react";
import ConfettiGenerator from "confetti-js";

import { Box } from "@chakra-ui/react";

const Confetti = () => {
  useEffect(() => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return (
    <Box pos={'absolute'} top={0} left={0} w={100} h={100}>
      <canvas id="my-canvas"></canvas>
    </Box>
  );
};

export default Confetti;
