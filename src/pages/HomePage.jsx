import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ReactHowler from "react-howler";

// Music
import inGameMusic from '../assets/music/in-game.mp3'

// Redux Selector
import {
  getCurrentLife,
  isLoading,
  loadingMessage,
} from "../redux/user/user.selector";
import { maxLevel, currentQuestion } from "../redux/question/question.selector";

// Redux Action
import {
  setCurrentPage,
  resetQuestionState,
} from "../redux/question/question.actions";
import {
  setLoading,
  resetUserState,
  toggleSoundEffect,
  setSoundNum,
} from "../redux/user/user.actions";

import { Box } from "@chakra-ui/react";

// Pages
import Play from "./Play";

// Components
import GameOver from "../components/Modals/GameOver/GameOver";
import GameEnding from "../components/Modals/GameEnding/GameEnding";
import Confetti from "../components/Confetti";
import Backgrounds from "../components/Backgrounds";

// Utils
import Loader from "../components/utils/Loader";

const HomePage = ({
  currentLife,
  setCurrentPage,
  isLoading,
  setLoading,
  loadingMessage,
  resetQuestionState,
  resetUserState,
  maxLevel,
  currentQuestion,
  toggleSoundEffect,
  setSoundNum
}) => {
  // States
  const [isGameOver, setIsGameOver] = useState(false);
  const [page, setPage] = useState(1);
  const [hasGameEnded, setHasGameEnded] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [isMusicLoading, setIsMusicLoading] = useState(true)

  const inGameMusicRef = useRef()

  useEffect(() => {
    if (!isMusicLoading && !isPageLoading) {
      setLoading("");
    }
  }, [isPageLoading, isMusicLoading]);

  useEffect(() => {
    if (currentLife === 0) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 3300);
    }
  }, [currentLife]);

  useEffect(() => {
    if (currentQuestion > maxLevel) {
      setSoundNum(4)
      toggleSoundEffect(true)
      setHasGameEnded(true)
    }
  }, [currentQuestion]);

  const restartGame = () => {
    setIsGameOver(false);
    setLoading("Restarting game..");

    resetQuestionState();
    resetUserState();

    setTimeout(() => {
      setLoading("");
    }, 2000);
  };

  const setPageFunc = (val) => {
    setLoading(val > page ? "Forwaaaaard!" : "Going Back..");
    setIsPageLoading(true)
    setPage(val);
    setTimeout(() => {
      setCurrentPage(val);
      setIsPageLoading(false)
    }, 2800);
  };

  const playError = () => {
    inGameMusicRef.once("unlock", () => {
      inGameMusicRef.play();
    });
  };
  return (
    <Box pos="relative">
      <ReactHowler
        preload={true}
        src={inGameMusic}
        playing={!isLoading}
        loop={true}
        html5={true}
        onLoad={() => setIsMusicLoading(false)}
        onLoadError={playError}
        onPlayError={playError}
        ref={inGameMusicRef}
      />
      <Backgrounds page={page} />
      {isLoading && (
        <Loader
          message={loadingMessage}
          forward={loadingMessage === "Forwaaaaard!"}
        />
      )}

      <GameOver isModalOpen={isGameOver} restartGame={restartGame} />

      {hasGameEnded && (
        <>
          <Confetti />
          <GameEnding isModalOpen={hasGameEnded} />
        </>
      )}

      {!hasGameEnded && !isLoading && <Play setPage={setPageFunc} />}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLife: getCurrentLife,
  isLoading,
  loadingMessage,
  maxLevel,
  currentQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  setLoading: (val) => dispatch(setLoading(val)),
  resetUserState: () => dispatch(resetUserState()),
  resetQuestionState: () => dispatch(resetQuestionState()),
  toggleSoundEffect: (val) => dispatch(toggleSoundEffect(val)),
  setSoundNum: (val) => dispatch(setSoundNum(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
