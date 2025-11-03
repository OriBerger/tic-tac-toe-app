import { useState } from 'react';
import "./App.css";
import Board from "./components/Board";
import HistoryList from "./components/HistoryList";
import ResetButton from "./components/ResetButton";
import Turn from "./components/Turn";

function App() {

const [squares, setSquares] = useState<('X' | 'O' | null)[]>(Array(9).fill(null));

const [xIsNext, setXIsNext] = useState<boolean>(true);



  const handleClick = (index: number) => {
    // go to the right square
    // fill in the square with the current player's symbol
    // check for a win, if win announce winner
    // check for a draw, if draw announce draw
    // else, flip the turn
  }

  return (
    <div className="App">
      <Turn />
      <Board squares={squares} onClick={handleClick} />
      <HistoryList />
      <ResetButton />
    </div>
  );
}

export default App;
