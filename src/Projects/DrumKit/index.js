import React, { useEffect } from "react";
import DrumLogic from "./helper";
import { Tile, Background } from "./styles";

const DrumKit = () => {
  const { drums, onKeyPress } = DrumLogic();

  useEffect(() => {
    document.addEventListener("keydown", (e) => onKeyPress(e));

    return document.removeEventListener("keydown", (e) => onKeyPress(e));
  });

  return (
    <Background>
      {drums.map(({ key, keypress }, i) => (
        <Tile key={i} id={keypress}>
          {key}
        </Tile>
      ))}
    </Background>
  );
};

export default DrumKit;
