import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCurrentLife } from '../redux/user/user.selector';

// Components
import Play from './Play';
import GameOver from '../components/Modals/GameOver/GameOver';

const HomePage = ({ currentLife }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  useEffect(() => {
    if (currentLife === 0) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 3300);
    }
  }, [currentLife]);

  const restartGame = () => {
    console.log('reject');
  };
  return (
    <>
      <GameOver isModalOpen={isGameOver} restartGame={restartGame} />
      <Play />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLife: getCurrentLife,
});

export default connect(mapStateToProps)(HomePage);
