import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import GameMessage from './components/GameMessage';
import { getRandomWord, isValidWord } from './utils/wordList';
import { 
  initializeBoard, 
  getGameStatus, 
  GAME_STATUS 
} from './utils/gameLogic';
import './styles/App.css';

function App() {
  const [board, setBoard] = useState(initializeBoard());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [targetWord, setTargetWord] = useState('');
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);
  const [showInvalidWord, setShowInvalidWord] = useState(false);

  // Initialize game
  useEffect(() => {
    const word = getRandomWord();
    setTargetWord(word);
    console.log('Target word:', word); // For debugging - remove in production
  }, []);

  // Handle game status changes
  useEffect(() => {
    const status = getGameStatus(guesses, targetWord, currentGuess);
    setGameStatus(status);
  }, [guesses, targetWord, currentGuess]);

  // Handle keyboard input
  const handleKeyPress = useCallback((key) => {
    if (gameStatus !== GAME_STATUS.PLAYING) return;

    if (key === 'ENTER') {
      // Submit guess
      if (currentInput.length === 5) {
        if (isValidWord(currentInput)) {
          const newGuesses = [...guesses, currentInput];
          setGuesses(newGuesses);
          setCurrentGuess(prev => prev + 1);
          setCurrentInput('');
        } else {
          // Show invalid word message
          setShowInvalidWord(true);
          setTimeout(() => setShowInvalidWord(false), 2000);
        }
      }
    } else if (key === 'BACKSPACE') {
      // Remove last letter
      setCurrentInput(prev => prev.slice(0, -1));
    } else if (key.length === 1 && /^[A-Z]$/.test(key)) {
      // Add letter
      if (currentInput.length < 5) {
        setCurrentInput(prev => prev + key);
      }
    }
  }, [gameStatus, currentInput, guesses]);

  // Handle physical keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();

      if (key === 'ENTER') {
        handleKeyPress('ENTER');
      } else if (key === 'BACKSPACE') {
        handleKeyPress('BACKSPACE');
      } else if (/^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  // Reset game
  const resetGame = () => {
    setBoard(initializeBoard());
    setGuesses([]);
    setCurrentGuess(0);
    setCurrentInput('');
    setTargetWord(getRandomWord());
    setGameStatus(GAME_STATUS.PLAYING);
    setShowInvalidWord(false);
  };

  // Get attempts count for win message
  const getAttemptsCount = () => {
    return guesses.length;
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">WORDLE</h1>
        <p className="subtitle">Guess the word in 6 tries!</p>
      </div>

      <GameBoard
        board={board}
        guesses={guesses}
        targetWord={targetWord}
        currentGuess={currentGuess}
        currentInput={currentInput}
      />

      <Keyboard
        onKeyPress={handleKeyPress}
        guesses={guesses}
        targetWord={targetWord}
      />

      <GameMessage
        gameStatus={gameStatus}
        targetWord={targetWord}
        attempts={getAttemptsCount()}
        onPlayAgain={resetGame}
      />

      {showInvalidWord && (
        <div className="invalid-word">
          Not a valid word!
        </div>
      )}
    </div>
  );
}

export default App;
