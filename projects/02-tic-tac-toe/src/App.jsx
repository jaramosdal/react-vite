import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Square from "./components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./logic/storage";
import "./App.css";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard); // asíncrona

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar aquí la partida
    saveGameToStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // Si esto fuese síncrono, QUE NO LO ES,
      console.log(winner); // Leyendo el estado... (lee el anterior, PORQUE EL ESTADO SE ACTUALIZA DE FORMA ASÍNCRONA)
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  useEffect(() => {
    console.log("useEffect siempre que se renderiza el componente");
  });

  useEffect(() => {
    console.log("useEffect la primera vez que renderiza el componente");
  }, []);

  useEffect(() => {
    console.log(
      "useEffect la primera vez que renderiza el componente y cuando cambia el winner"
    );
  }, [winner]);

  // useEffect(() => {
  //   saveGameToStorage({
  //     board: newBoard,
  //     turn: newTurn,
  //   });
  // }, [turn, winner]);

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}
export default App;
