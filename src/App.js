import { useState, useEffect } from "react";
import "./App.css";
import NumberInput from "./Components/NumberInput";
import { start_state_sudoku, valid_solution_sudoku } from "./data";
import { validateAllRows } from "./validateBoard";

const makeCopy = (array) => {
  return array.map((array) => {
    return [...array];
  });
};

/** @refactor */
const isGameFinished = (gameState) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!gameState[i][j]) {
        return false;
      }
    }
  }
  return true;
};

function App() {
  const [sudokuState, setSudokuState] = useState(makeCopy(start_state_sudoku));

  useEffect(() => {
    if (isGameFinished(sudokuState)) {
      if (validateAllRows(sudokuState)) alert("You won!");
      else alert("Recheck your solution!");
    }
    console.log({ row: sudokuState[0] });
  }, [sudokuState]);

  return (
    <div className="App">
      {sudokuState.map((array, i) => {
        return (
          <div>
            {array.map((ele, j) => {
              return (
                <NumberInput
                  setBoardState={setSudokuState}
                  updateValue={(number) => {
                    setSudokuState((prev) => {
                      const prevState = [...prev];
                      prevState[i][j] = number;
                      return prevState;
                    });
                  }}
                  value={ele}
                  isEditable={start_state_sudoku[i][j] ? false : true}
                />
              );
            })}
          </div>
        );
      })}
      <button
        onClick={() => {
          setSudokuState(makeCopy(start_state_sudoku))
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

export default App;
