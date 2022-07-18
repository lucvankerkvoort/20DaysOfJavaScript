export const getQuote = async () => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const apiURL =
    "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
  try {
    const quote = await fetch(proxy + apiURL);
    const response = await quote.json();
    return response;
  } catch {
    return "";
  }
};
