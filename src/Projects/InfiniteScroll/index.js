import React from "react";
import { usePhotos } from "./utils";
import { Photos, Photo, Title } from "./styles";
const InfiniteScroll = () => {
  const { photos, setReady } = usePhotos();

  return (
    <Photos>
      <Title>Infinite Scroll</Title>
      {photos.map((photo, i) => (
        <Photo src={photo} onLoad={() => setReady(true)} key={i} alt="photo" />
      ))}
    </Photos>
  );
};

export default InfiniteScroll;
