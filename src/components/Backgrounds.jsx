import React, { useEffect, useRef } from "react";
import Preloader from "./utils/Preloader";

// Background Images - LG
import BG1 from "../assets/bg/bg1.jpg";
import BG2 from "../assets/bg/bg2.jpg";
import BG3 from "../assets/bg/bg3.jpg";
import BG4 from "../assets/bg/bg4.jpg";
// Background Images - SM
import BG1SM from "../assets/bg-mobile/bg1.jpg";
import BG2SM from "../assets/bg-mobile/bg2.jpg";
import BG3SM from "../assets/bg-mobile/bg3.jpg";
import BG4SM from "../assets/bg-mobile/bg4.jpg";

const Backgrounds = ({ page }) => {
  // Refs
  const bg1Ref = useRef();
  const bg2Ref = useRef();
  const bg3Ref = useRef();
  const bg4Ref = useRef();

  const bg1Refsm = useRef();
  const bg2Refsm = useRef();
  const bg3Refsm = useRef();
  const bg4Refsm = useRef();

  useEffect(() => {
    Preloader(
      [
        bg1Ref.current,
        bg2Ref.current,
        bg3Ref.current,
        bg4Ref.current,
        bg1Refsm.current,
        bg2Refsm.current,
        bg3Refsm.current,
        bg4Refsm.current,
      ],
      [BG1, BG2, BG3, BG4, BG1SM, BG2SM, BG3SM, BG4SM]
    );
  }, []);

  return (
    <>
      <img
        alt="backgroundimg1"
        className={`bg bg1 bg-lg ${page === 1 && "show"}`}
        id="bg1"
        ref={bg1Ref}
      />
      <img
        alt="backgroundimg1sm"
        className={`bg bg1 bg-sm ${page === 1 && "show"}`}
        id="bg1sm"
        ref={bg1Refsm}
      />
      <img
        alt="backgroundimg2"
        className={`bg bg2 lg ${page === 2 && "show"}`}
        id="bg2"
        ref={bg2Ref}
      />
      <img
        alt="backgroundimg2sm"
        className={`bg bg2 bg-sm ${page === 2 && "show"}`}
        id="bg2sm"
        ref={bg2Refsm}
      />
      <img
        alt="backgroundimg3"
        className={`bg bg3 lg ${page === 3 && "show"}`}
        id="bg3"
        ref={bg3Ref}
      />
      <img
        alt="backgroundimg3sm"
        className={`bg bg3 bg-sm ${page === 3 && "show"}`}
        id="bg3sm"
        ref={bg3Refsm}
      />
      <img
        alt="backgroundimg4"
        className={`bg bg4 lg ${page === 4 && "show"}`}
        id="bg4"
        ref={bg4Ref}
      />
      <img
        alt="backgroundimg4sm"
        className={`bg bg4 bg-sm ${page === 4 && "show"}`}
        id="bg4sm"
        ref={bg4Refsm}
      />
    </>
  );
};

export default Backgrounds;
