import React, { useEffect, useRef, useState } from "react";

import Typed from "typed.js";
import Hotkeys from "react-hot-keys";

import Preloader from "../components/utils/Preloader";
import Loader from "../components/utils/Loader";

import ThankYouModal from '../components/Modals/ThankYouModal/ThankYouModal'

// Images - LG
import SCENE6 from "../assets/bg/SCENE6.jpg";

// Images - SM
import SCENE6SM from "../assets/bg-mobile/SCENE6.jpg";

import { Box, Text } from "@chakra-ui/react";

const Scene = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [skipScene, setSkipScene] = useState(true);
  const [showContinue, setShowContinue] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captionNum, setCaptionNum] = useState(0);
  const [captions, setCaptions] = useState([
    "Na kyaulian na siya! Magsukul kaymu taymanghud!!!",
  ]);

  const SceneSix = useRef();

  const SceneSixsm = useRef();

  const el = useRef();
  const typed = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      const text = captions[captionNum];
      const options = {
        strings: [text],
        typeSpeed: 50,
        backspeed: 50,
        onComplete: function () {
          setTimeout(() => {
            setShowContinue(true);
          }, 800);
        },
      };

      setTimeout(() => {
        typed.current = new Typed(el.current, options);
      }, 1200);

      return () => {
        typed.current.destroy();
      };
    }
  }, [captionNum, isLoading]);

  useEffect(() => {
    Preloader(
      [
        SceneSix.current,
        SceneSixsm.current,
      ],
      [
        SCENE6,
        SCENE6SM,
      ]
    ).then(() => {
      setTimeout(() => {
        setIsLoading(false);
        startScene(SceneSix.current, SceneSixsm.current);
      }, 3000);
    });
  }, []);

  const updateSceneState = () => {
      setIsModalOpen(true)
  };

  const startScene = (scene1, scene1sm) => {
    setSkipScene(false);
    setTimeout(() => {
      scene1.classList.add("show");
      scene1sm.classList.add("show");
      setCurrentScene(currentScene + 1);

      setTimeout(() => {
        setSkipScene(true);
      }, 2000);
    }, 800);
  };
  return (
    <Hotkeys keyName="enter, space" onKeyDown={updateSceneState}>
      {isLoading && <Loader message="Loading Scene..." forward={true} />}
      <ThankYouModal isModalOpen={isModalOpen} />
      <div className="SCENES">
        {/* For LG images */}
        <img alt="SCENE 6" className="SCENE SCENE-6 SCENE-LG" ref={SceneSix} />
        {/* For SM images */}
        <img
          alt="SCENE 6 Small"
          className="SCENE SCENE-6 SCENE-SM"
          ref={SceneSixsm}
        />
        <Box
          width={{ base: "230px", md:'300px', lg: "400px" }}
          height={{ base: "120px", md:'150px', lg: "150px" }}
          bg={"yellow.600"}
          borderRadius={"lg"}
          style={{ boxShadow: "3px 3px 0 #fff" }}
          d={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"1rem"}
          flexDir={"column"}
          className="caption-container"
        >
          <div className="caption-wrapper">
            <span ref={el}></span>
          </div>
          <Text
            opacity={0}
            fontSize={".7rem"}
            color={"green.200"}
            className={`cont ${showContinue && "show"}`}
            onClick={updateSceneState}
          >
            [<span className="lg">press space</span>
            <span className="sm">click here</span> to continue]
          </Text>
        </Box>
      </div>
    </Hotkeys>
  );
};

export default Scene;