import { useEffect } from "react";
import { Background } from "./styles";
export const useVideo = () => {
  const selectMediaStream = async () => {
    const videoElement = document.getElementById("video");
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (error) {
      console.error("something went wrong" + error);
    }
  };

  useEffect(() => {
    const button = document.getElementById("button");
    const videoElement = document.getElementById("video");
    button.addEventListener("click", async () => {
      console.log("button", button);
      button.disabled = true;
      await videoElement.requestPictureInPicture();
      button.disabeled = false;
    });
    return () => button.removeEventListener("click", selectMediaStream);
  });

  //   useEffect(() => {
  //     window.addEventListener("load", selectMediaStream);
  //   });
  return selectMediaStream;
};
