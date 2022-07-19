import React from "react";
import { useVideo } from "./utils";

import { Background, Button } from "./styles";

const PictureInPicture = () => {
  const selectMediaStream = useVideo();

  return (
    <Background>
      <video id="video" controls height="360" width="640" hidden />
      <Button id="button">Start</Button>
      <Button onClick={() => selectMediaStream()}>Select Media</Button>
    </Background>
  );
};

export default PictureInPicture;
