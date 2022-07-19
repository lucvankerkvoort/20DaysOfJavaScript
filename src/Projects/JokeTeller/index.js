import React, { useEffect, useState } from "react";
import { get, apiURL } from "../utils";
import { Background, Wrapper } from "./styles";

const JokeTeller = () => {
  const [joke, setJoke] = useState("");
  const [gif, setGif] = useState("");

  const loadJoke = async () => {
    const response = await get(apiURL["JOKETELLER"]);
    console.log({ response });
    if (response.setup) {
      return setJoke(response.setup + response.delivery);
    }
    return setJoke(response.joke);
  };

  const loadGif = async () => {
    const response = await get(apiURL["GIPHY"]).then(({ data }) => data);
    console.log({ response });
    const {
      images: { downsized_small },
    } = response;
    console.log({ downsized_small });

    return response && setGif(downsized_small);
  };

  return (
    <Background>
      {console.log("gif", gif)}

      {console.log(joke)}
      <h1>Joke Teller</h1>
      <button onClick={() => loadJoke()}>Get Joke</button>
      <button onClick={() => loadGif()}>Get Gif</button>
      <Wrapper>
        {joke}
        <video
          autoPlay
          height={gif.height}
          width={gif.width}
          src={gif.mp4}
          alt="gif"
        />
      </Wrapper>
    </Background>
  );
};

export default JokeTeller;
