// Game logic utilities for Wordle

export const GAME_STATUS = {
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost'
};

export const TILE_STATUS = {
  EMPTY: 'empty',
  FILLED: 'filled',
  CORRECT: 'correct',
  PRESENT: 'present',
  ABSENT: 'absent'
};

// Check a guess against the target word
export const checkGuess = (guess, targetWord) => {
  const result = [];
  const targetLetters = targetWord.split('');
  const guessLetters = guess.split('');

  // First pass: mark correct positions
  const availableTargetLetters = [...targetLetters];
  const availableGuessLetters = [...guessLetters];

  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = TILE_STATUS.CORRECT;
      availableTargetLetters[i] = null;
      availableGuessLetters[i] = null;
    }
  }

  // Second pass: mark present letters
  for (let i = 0; i < 5; i++) {
    if (result[i]) continue; // Already marked as correct

    const letter = guessLetters[i];
    const targetIndex = availableTargetLetters.indexOf(letter);

    if (targetIndex !== -1) {
      result[i] = TILE_STATUS.PRESENT;
      availableTargetLetters[targetIndex] = null;
    } else {
      result[i] = TILE_STATUS.ABSENT;
    }
  }

  return result;
};

// Get keyboard key status based on all guesses
export const getKeyboardStatus = (guesses, targetWord) => {
  const keyStatus = {};

  guesses.forEach(guess => {
    if (guess.length === 5) {
      const result = checkGuess(guess, targetWord);
      guess.split('').forEach((letter, index) => {
        const currentStatus = keyStatus[letter];
        const newStatus = result[index];

        // Priority: correct > present > absent
        if (!currentStatus || 
            (newStatus === TILE_STATUS.CORRECT) ||
            (newStatus === TILE_STATUS.PRESENT && currentStatus !== TILE_STATUS.CORRECT)) {
          keyStatus[letter] = newStatus;
        }
      });
    }
  });

  return keyStatus;
};

// Initialize empty game board
export const initializeBoard = () => {
  return Array(6).fill(null).map(() => Array(5).fill(''));
};

// Get game status
export const getGameStatus = (guesses, targetWord, currentGuess) => {
  // Check if won
  for (let guess of guesses) {
    if (guess === targetWord) {
      return GAME_STATUS.WON;
    }
  }

  // Check if lost (used all attempts)
  if (guesses.length >= 6 && currentGuess >= 6) {
    return GAME_STATUS.LOST;
  }

  return GAME_STATUS.PLAYING;
};
