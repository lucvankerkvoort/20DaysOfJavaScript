export const getPhotos = async (count = 1) => {
  const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=SJMS6tqA7babKDjPJejCKu9r0yB2KBQz&tag=&rating=g`;
  try {
    const quote = await fetch(apiURL);
    const response = await quote.json();
    return response;
  } catch {
    return [];
  }
};
