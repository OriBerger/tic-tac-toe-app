import "./App.css";
import Board from "./components/Board";
import HistoryList from "./components/HistoryList";
import ResetButton from "./components/ResetButton";
import Turn from "./components/Turn";

function App() {
  return (
    <div className="App">
      <Turn />
      <Board />
      <HistoryList />
      <ResetButton />
    </div>
  );
}

export default App;
