import React from 'react';
import Tile from './Tile';
import { checkGuess, TILE_STATUS } from '../utils/gameLogic';

const GameBoard = ({ board, guesses, targetWord, currentGuess, currentInput }) => {
  const getTileStatus = (rowIndex, colIndex) => {
    // If this is a completed guess
    if (rowIndex < guesses.length) {
      const guess = guesses[rowIndex];
      if (guess.length === 5) {
        const result = checkGuess(guess, targetWord);
        return result[colIndex];
      }
    }

    // If this is the current input row
    if (rowIndex === currentGuess && currentInput[colIndex]) {
      return TILE_STATUS.FILLED;
    }

    return TILE_STATUS.EMPTY;
  };

  const getTileLetter = (rowIndex, colIndex) => {
    // If this is a completed guess
    if (rowIndex < guesses.length) {
      return guesses[rowIndex][colIndex] || '';
    }

    // If this is the current input row
    if (rowIndex === currentGuess) {
      return currentInput[colIndex] || '';
    }

    return '';
  };

  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((_, colIndex) => (
            <Tile
              key={colIndex}
              letter={getTileLetter(rowIndex, colIndex)}
              status={getTileStatus(rowIndex, colIndex)}
              delay={colIndex * 0.1}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
