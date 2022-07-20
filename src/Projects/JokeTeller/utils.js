import { useEffect, useState } from "react";
import { get, apiURL } from "../utils";

const useJokeTeller = () => {
  const [joke, setJoke] = useState("");
  const [gif, setGif] = useState("");
  const [speechActive, setSpeech] = useState(false);

  const loadJoke = async () => {
    const response = await get(apiURL["JOKETELLER"]);
    if (response.setup) {
      return setJoke(response.setup + response.delivery);
    }
    return setJoke(response.joke);
  };

  const loadGif = async () => {
    const response = await get(apiURL["GIPHY"]).then(({ data }) => data);
    const {
      images: { downsized_small },
    } = response;

    return response && setGif(downsized_small);
  };

  const tellAJoke = async () => {
    if (!joke) return;
    const synth = window.speechSynthesis;
    const funny = new SpeechSynthesisUtterance(joke);

    const voices = synth
      .getVoices()
      .filter((person) => person.lang === "en-US");

    funny.voice = voices[4];
    synth.speak(funny);
    loadJoke();
  };

  const startSpeechRecognition = () => {
    const speech = window.webkitSpeechRecognition;
    const recognition = new speech();

    if (speechActive) {
      console.log("stopping speech recognition");
      recognition.stop();
      setSpeech(false);
    } else {
      console.log("starting speech recognition");
      recognition.start();
      setSpeech(true);
    }
    recognition.onresult = (e) => {
      const result = e.results[0][0].transcript;
      if (result.includes("random gif")) {
        loadGif();
        setSpeech(false);
      } else if (result.includes("tell a joke")) {
        tellAJoke();
        setSpeech(false);
      }
    };
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return { startSpeechRecognition, gif, speechActive };
};

export default useJokeTeller;
