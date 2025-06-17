import React from 'react';
import { GAME_STATUS } from '../utils/gameLogic';

const GameMessage = ({ gameStatus, targetWord, attempts, onPlayAgain }) => {
  if (gameStatus === GAME_STATUS.PLAYING) {
    return null;
  }

  return (
    <div className="game-message">
      {gameStatus === GAME_STATUS.WON ? (
        <>
          <h2>🎉 Congratulations! 🎉</h2>
          <p>You guessed the word in {attempts} attempt{attempts !== 1 ? 's' : ''}!</p>
          <div className="target-word">{targetWord}</div>
        </>
      ) : (
        <>
          <h2>😢 Game Over</h2>
          <p>Better luck next time!</p>
          <p>The word was:</p>
          <div className="target-word">{targetWord}</div>
        </>
      )}

      <button 
        className="play-again-btn"
        onClick={onPlayAgain}
        type="button"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameMessage;
