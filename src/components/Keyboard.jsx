import React from 'react';
import { getKeyboardStatus, TILE_STATUS } from '../utils/gameLogic';

const Keyboard = ({ onKeyPress, guesses, targetWord }) => {
  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ];

  const keyStatus = getKeyboardStatus(guesses, targetWord);

  const getKeyClassName = (key) => {
    let className = 'key';

    if (key === 'ENTER' || key === 'BACKSPACE') {
      className += ' wide';
    }

    const status = keyStatus[key];
    if (status === TILE_STATUS.CORRECT) {
      className += ' correct';
    } else if (status === TILE_STATUS.PRESENT) {
      className += ' present';
    } else if (status === TILE_STATUS.ABSENT) {
      className += ' absent';
    }

    return className;
  };

  const handleKeyClick = (key) => {
    onKeyPress(key);
  };

  const getKeyDisplay = (key) => {
    if (key === 'BACKSPACE') {
      return '⌫';
    }
    return key;
  };

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={getKeyClassName(key)}
              onClick={() => handleKeyClick(key)}
              type="button"
            >
              {getKeyDisplay(key)}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
