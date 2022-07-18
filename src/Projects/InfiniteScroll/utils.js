import { useEffect, useState } from "react";
import { loadPexelPhotos } from "./API";

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [ready, setReady] = useState(false);

  const shouldCallAPI = async () => {
    const location = window.innerHeight + window.scrollY;
    const trigger = document.body.offsetHeight - 1000;
    if (location >= trigger && ready) {
      setReady(false);
      const newPhotos = await loadPexelPhotos();
      setPhotos([...photos, ...newPhotos]);
    }
  };

  useEffect(() => {
    const initialRun = async () => {
      const newPhotos = await loadPexelPhotos();
      setPhotos([...photos, ...newPhotos]);
    };
    initialRun();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", shouldCallAPI);

    return () => window.removeEventListener("scroll", shouldCallAPI);
  });

  return { photos, setReady };
};
