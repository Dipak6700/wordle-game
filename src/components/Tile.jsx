import React from 'react';
import { TILE_STATUS } from '../utils/gameLogic';

const Tile = ({ letter, status, delay = 0 }) => {
  const getClassName = () => {
    let className = 'tile';

    if (letter && status === TILE_STATUS.FILLED) {
      className += ' filled';
    } else if (status === TILE_STATUS.CORRECT) {
      className += ' correct';
    } else if (status === TILE_STATUS.PRESENT) {
      className += ' present';
    } else if (status === TILE_STATUS.ABSENT) {
      className += ' absent';
    }

    return className;
  };

  return (
    <div 
      className={getClassName()}
      style={{ animationDelay: `${delay}s` }}
    >
      {letter}
    </div>
  );
};

export default Tile;
