export const getPhotos = async (count = 1) => {
  const apiURL = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY_UNSPLASH}&count=${count}`;
  try {
    const quote = await fetch(apiURL);
    const response = await quote.json();
    return response;
  } catch {
    return [];
  }
};

export const loadPhotos = async (count) => {
  const photos = await getPhotos(count);
  return photos.map((item) => item.urls.small);
};

// Fallback API if Unsplash stops working
export const getPexelPhotos = async (count = 1) => {
  const apiURL = "https://api.pexels.com/v1/search?query=people";
  try {
    const quote = await fetch(apiURL, {
      method: "GET",
      authorization: process.env.REACT_APP_API_KEY_PEXEL,
    });
    const response = await quote.json();
    console.log(response);
    return response;
  } catch {
    return [];
  }
};

export const loadPexelPhotos = async (count) => {
  const { photos } = await getPexelPhotos(count);

  return photos.map((item) => item.src.tiny);
};
