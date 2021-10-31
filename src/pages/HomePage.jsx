import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
  toggleMusicEffect,
  setMusicNum,
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
import MusicLoader from "../components/utils/MusicLoader";

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
  toggleMusicEffect,
  setMusicNum,
}) => {
  // States
  const [isGameOver, setIsGameOver] = useState(false);
  const [page, setPage] = useState(1);
  const [hasGameEnded, setHasGameEnded] = useState(false);

  useEffect(() => {
    if(!isLoading) {
      setMusicNum(1);
      toggleMusicEffect(true);
    } else {
      toggleMusicEffect(false)
    }
  }, [isLoading]);

  useEffect(() => {
    if (currentLife === 0) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 3300);
    }
  }, [currentLife]);

  useEffect(() => {
    if (currentQuestion > maxLevel) setHasGameEnded(true);
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
    setPage(val);
    setTimeout(() => {
      setCurrentPage(val);
      setLoading("");
    }, 2800);
  };
  return (
    <Box pos="relative">
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
  toggleMusicEffect: (val) => dispatch(toggleMusicEffect(val)),
  setMusicNum: (val) => dispatch(setMusicNum(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
