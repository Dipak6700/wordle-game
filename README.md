# Wordle Game

A complete implementation of the popular Wordle game built with React and Vite.

## Features

- **6x5 Game Board**: Six attempts to guess a five-letter word
- **Color-coded Feedback**: 
  - 🟩 Green: Correct letter in correct position
  - 🟨 Yellow: Correct letter in wrong position
  - ⬜ Gray: Letter not in the word
- **Interactive Keyboard**: Both on-screen keyboard and physical keyboard support
- **Word Validation**: Only accepts valid 5-letter words
- **Game State Management**: Win/lose detection with appropriate messages
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Modern, dark theme similar to the original Wordle

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Extract the project files
2. Navigate to the project directory:
   ```bash
   cd wordle-game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Play

1. **Objective**: Guess the hidden 5-letter word in 6 attempts
2. **Making a Guess**: Type letters using your keyboard or click the on-screen keyboard
3. **Submitting**: Press Enter to submit your 5-letter guess
4. **Feedback**: After each guess, tiles will change colors:
   - Green: Letter is correct and in the right position
   - Yellow: Letter is in the word but in the wrong position
   - Gray: Letter is not in the word
5. **Winning**: Guess the word correctly within 6 attempts
6. **New Game**: Click "Play Again" to start a new game with a different word

## Technical Implementation

### Components

- **App.jsx**: Main game component managing state and game logic
- **GameBoard.jsx**: Renders the 6x5 grid of tiles
- **Tile.jsx**: Individual tile component with color states
- **Keyboard.jsx**: Interactive on-screen keyboard
- **GameMessage.jsx**: Win/lose modal with play again option

### Utilities

- **wordList.js**: Contains 500+ valid 5-letter words and validation functions
- **gameLogic.js**: Core game logic including word checking and state management

### Features Implemented

- ✅ React functional components with hooks
- ✅ useState for state management
- ✅ useEffect for side effects and event listeners
- ✅ useCallback for performance optimization
- ✅ Keyboard event handling
- ✅ Conditional rendering
- ✅ Component reusability
- ✅ Responsive CSS design
- ✅ Game state management
- ✅ Word validation
- ✅ Animations and transitions

## Project Structure

```
wordle-game/
├── public/
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameMessage.jsx
│   │   ├── Keyboard.jsx
│   │   └── Tile.jsx
│   ├── styles/
│   │   └── App.css
│   ├── utils/
│   │   ├── gameLogic.js
│   │   └── wordList.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with animations
- **JavaScript ES6+**: Modern JavaScript features

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is for educational purposes. Wordle is originally created by Josh Wardle.
#   w o r d l e - g a m e  
 #   W o r d l e g a m e .  
 #   W o r d l e g a m e .  
 #   W o r d l e g a m e .  
 # W o r d l e - g a m e .  
 # W o r d l e - g a m e .  
 # W o r d l e - g a m e .  
 