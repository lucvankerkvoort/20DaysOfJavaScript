import React from "react";
import Logic from "./helper";
import { Tile, Board } from "./styles";

const TicTacToe = () => {
  const { board, move } = Logic();

  return (
    <Board>
      {board.map((item, i) => (
        <Tile onClick={() => move(i)}>{item}</Tile>
      ))}
    </Board>
  );
};

export default TicTacToe;
