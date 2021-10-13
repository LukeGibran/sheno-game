import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Selector
import {
  getCurrentLife,
  isLoading,
  loadingMessage,
} from "../redux/user/user.selector";

// Redux Action
import { setCurrentPage, resetQuestionState } from "../redux/question/question.actions";
import { setLoading, resetUserState } from "../redux/user/user.actions";

import { Box } from "@chakra-ui/react";

// Components
import Play from "./Play";
import GameOver from "../components/Modals/GameOver/GameOver";

// Utils
import Loader from "../components/utils/Loader";

const HomePage = ({
  currentLife,
  setCurrentPage,
  isLoading,
  setLoading,
  loadingMessage,
  resetQuestionState,
  resetUserState
}) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (currentLife === 0) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 3300);
    }
  }, [currentLife]);

  const restartGame = () => {
    setIsGameOver(false)
    setLoading('Restarting game..')

    resetQuestionState()
    resetUserState()

    setTimeout(()=> {
      setLoading('')
    }, 2000)
  };

  const setPageFunc = (val) => {
    setLoading(val > page ? "Forwaaaaard!" : "Going Back..");
    setPage(val);
    setTimeout(() => {
      setCurrentPage(val);
      setLoading('');
    }, 2800);
  };
  return (
    <Box className={`bg bg${page}`} pos="relative">
      {isLoading && (
        <Loader
          message={loadingMessage}
          forward={loadingMessage === "Forwaaaaard!"}
        />
      )}
      <GameOver isModalOpen={isGameOver} restartGame={restartGame} />
      <Play setPage={setPageFunc} />
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLife: getCurrentLife,
  isLoading,
  loadingMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  setLoading: (val) => dispatch(setLoading(val)),
  resetUserState: () => dispatch(resetUserState()),
  resetQuestionState: () => dispatch(resetQuestionState())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
