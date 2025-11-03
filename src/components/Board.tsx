import Square from "./Square";

interface BoardProps {
  squares: ("X" | "O" | null)[];
  onClick: (index: number) => void;
}

function Board({ squares, onClick }: BoardProps) {

  const renderSquare = (index: number) => {
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => onClick(index)}
      />
    );
  };

  return (
    <div className="board">
      <div className="grid">
        <div className="row">
          {squares.slice(0, 3).map((_, index) => renderSquare(index))}
        </div>
        <div className="row">
          {squares.slice(3, 6).map((_, index) => renderSquare(index))}
        </div>
        <div className="row">
          {squares.slice(6, 9).map((_, index) => renderSquare(index))}
        </div>
      </div>
    </div>
  );
}

export default Board;
