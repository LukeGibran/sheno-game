import React, { useEffect, useRef, useState } from "react";

import { connect } from "react-redux";

// Redux Action
import { setLoading } from "../redux/user/user.actions";

import Typed from "typed.js";
import Hotkeys from "react-hot-keys";

import Preloader from "../components/utils/Preloader";
import Loader from "../components/utils/Loader";

import SceneEnding from "../components/Modals/SceneEnding/SceneEnding";

// Images - LG
import SCENE1 from "../assets/bg/SCENE1.jpg";
import SCENE2 from "../assets/bg/SCENE2.jpg";
import SCENE3 from "../assets/bg/SCENE3.jpg";
import SCENE4 from "../assets/bg/SCENE4.jpg";
import SCENE5 from "../assets/bg/SCENE5.jpg";

// Images - SM
import SCENE1SM from "../assets/bg-mobile/SCENE1.jpg";
import SCENE2SM from "../assets/bg-mobile/SCENE2.jpg";
import SCENE3SM from "../assets/bg-mobile/SCENE3.jpg";
import SCENE4SM from "../assets/bg-mobile/SCENE4.jpg";
import SCENE5SM from "../assets/bg-mobile/SCENE5.jpg";

// Utils
import MusicLoader from "../components/utils/MusicLoader";

import { Box, Text } from "@chakra-ui/react";

const Scene = ({ history, setLoading }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [skipScene, setSkipScene] = useState(true);
  const [showContinue, setShowContinue] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captionNum, setCaptionNum] = useState(0);
  const [captions, setCaptions] = useState([
    "This is Ian. He always spends his day scrolling through his social media.",
    "He spends so much time on social media, he doesn't realize it's already evening.",
    "This is a new day, and now he's in his blanket, probably sleeping.",
    "But no, he is still on his phone surfing the social media...",
    "...and gradually becoming sad, anxious, and a social media addict over time.",
  ]);

  const SceneOne = useRef();
  const SceneTwo = useRef();
  const SceneThree = useRef();
  const SceneFour = useRef();
  const SceneFive = useRef();

  const SceneOneSm = useRef();
  const SceneTwoSm = useRef();
  const SceneThreeSm = useRef();
  const SceneFourSm = useRef();
  const SceneFiveSm = useRef();

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
        SceneOne.current,
        SceneTwo.current,
        SceneThree.current,
        SceneFour.current,
        SceneFive.current,
        SceneOneSm.current,
        SceneTwoSm.current,
        SceneThreeSm.current,
        SceneFourSm.current,
        SceneFiveSm.current,
      ],
      [
        SCENE1,
        SCENE2,
        SCENE3,
        SCENE4,
        SCENE5,
        SCENE1SM,
        SCENE2SM,
        SCENE3SM,
        SCENE4SM,
        SCENE5SM,
      ]
    ).then(() => {
      setTimeout(() => {
        setIsLoading(false);
        startScene(SceneOne.current, SceneOneSm.current);
      }, 3000);
    });
  }, []);

  const updateSceneState = () => {
    const scenesLG = [
      SceneOne.current,
      SceneTwo.current,
      SceneThree.current,
      SceneFour.current,
      SceneFive.current,
    ];
    const scenesSM = [
      SceneOneSm.current,
      SceneTwoSm.current,
      SceneThreeSm.current,
      SceneFourSm.current,
      SceneFiveSm.current,
    ];

    if (!skipScene) return;
    if (currentScene === scenesLG.length) return setIsModalOpen(true);

    scenesLG[currentScene].classList.remove("show");
    scenesSM[currentScene].classList.remove("show");

    setCurrentScene(currentScene + 1);

    scenesLG[currentScene].classList.add("show");
    scenesSM[currentScene].classList.add("show");
    setCaptionNum(captionNum + 1);
    setShowContinue(false);

    setSkipScene(false);
    setTimeout(() => {
      setSkipScene(true);
    }, 2000);
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

  const goTo = () => {
    setLoading("Forwaaaaard!");
    history.push("/");

    setTimeout(() => {
      setLoading("");
    }, 3000);
  };
  return (
    <Hotkeys keyName="enter, space" onKeyDown={updateSceneState}>
      {isLoading && <Loader message="Loading Scene..." forward={true} />}
      <SceneEnding goTo={goTo} isModalOpen={isModalOpen} />
      {!isLoading && <MusicLoader num={0} />}
      <div className="SCENES">
        {/* For LG images */}
        <img alt="SCENE 1" className="SCENE SCENE-1 SCENE-LG" ref={SceneOne} />
        <img alt="SCENE 2" className="SCENE SCENE-2 SCENE-LG" ref={SceneTwo} />
        <img
          alt="SCENE 3"
          className="SCENE SCENE-3 SCENE-LG"
          ref={SceneThree}
        />
        <img alt="SCENE 4" className="SCENE SCENE-4 SCENE-LG" ref={SceneFour} />
        <img alt="SCENE 5" className="SCENE SCENE-5 SCENE-LG" ref={SceneFive} />

        {/* For SM images */}
        <img
          alt="SCENE 1 Small"
          className="SCENE SCENE-1 SCENE-SM"
          ref={SceneOneSm}
        />
        <img
          alt="SCENE 2 Small"
          className="SCENE SCENE-2 SCENE-SM"
          ref={SceneTwoSm}
        />
        <img
          alt="SCENE 3 Small"
          className="SCENE SCENE-3 SCENE-SM"
          ref={SceneThreeSm}
        />
        <img
          alt="SCENE 4 Small"
          className="SCENE SCENE-4 SCENE-SM"
          ref={SceneFourSm}
        />
        <img
          alt="SCENE 5 Small"
          className="SCENE SCENE-5 SCENE-SM"
          ref={SceneFiveSm}
        />
        <Box
          width={{ base: "330px", md: "300px", lg: "500px" }}
          height={{ base: "70px", md: "80px", lg: "150px" }}
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

const mapDispatchToProps = (dispatch) => ({
  setLoading: (val) => dispatch(setLoading(val)),
});

export default connect(null, mapDispatchToProps)(Scene);
