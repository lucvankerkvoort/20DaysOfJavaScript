import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

const DrumLogic = () => {
  const onKeyPress = (event) => {
    const key = event.keyCode;
    const drumPad = drums.find((item) => item.keypress === key);
    if (!drumPad) return;

    const { sound, keypress } = drumPad;

    sound.play();
    const el = document.getElementById(keypress);
    el.classList.add("playing");

    return setTimeout(() => el.classList.remove("playing"), 500);
  };

  const drums = [
    {
      key: "A",
      keypress: 65,
      sound: new Audio(clap),
    },
    { key: "S", keypress: 83, sound: new Audio(hihat) },
    { key: "D", keypress: 68, sound: new Audio(kick) },
    { key: "F", keypress: 70, sound: new Audio(openhat) },
    { key: "G", keypress: 71, sound: new Audio(boom) },
    { key: "H", keypress: 72, sound: new Audio(ride) },
    { key: "J", keypress: 74, sound: new Audio(snare) },
    { key: "K", keypress: 75, sound: new Audio(tom) },
    { key: "L", keypress: 76, sound: new Audio(tink) },
  ];

  return {
    drums,
    onKeyPress,
  };
};

export default DrumLogic;
