import React from "react";
import {
  Background,
  Wrapper,
  Button,
  Title,
  Video,
  Transcript,
} from "./styles";
import useJokeTeller from "./utils";

const JokeTeller = () => {
  const { gif, startSpeechRecognition, speechActive } = useJokeTeller();

  return (
    <Background>
      <Title>Joke Teller</Title>
      <Transcript>
        This page is speech controlled
        <br /> click on the button below to start speaking <br />
        Try saying 'random gif' or 'tell a joke'
      </Transcript>
      <Button disabled={speechActive} onClick={() => startSpeechRecognition()}>
        {speechActive ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c6/On_air.gif"
            alt="quote"
            width="150px"
          />
        ) : (
          "Speak"
        )}
      </Button>

      <Wrapper>
        {gif && (
          <Video
            autoPlay
            height={gif.height}
            width={gif.width}
            src={gif.mp4}
            alt="gif"
          />
        )}
      </Wrapper>
    </Background>
  );
};

export default JokeTeller;
