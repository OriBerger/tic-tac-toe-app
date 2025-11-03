interface SquareProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <div>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
