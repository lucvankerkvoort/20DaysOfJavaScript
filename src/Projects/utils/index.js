export const get = async (apiURL = "", fallback) => {
  try {
    const quote = await fetch(apiURL);
    const response = await quote.json();
    console.log({ response, apiURL });
    return response;
  } catch {
    return fallback || undefined;
  }
};

export const apiURL = {
  GIPHY: `https://api.giphy.com/v1/gifs/random?api_key=SJMS6tqA7babKDjPJejCKu9r0yB2KBQz&tag=&rating=g`,
  JOKETELLER: `https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist`,
  UNSPLASH: `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY_UNSPLASH}&count=10`,
  PEXEL: "https://api.pexels.com/v1/search?query=people",
  QUOTE:
    "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
};
