import React, { useState } from "react";
import {
  Background,
  Card,
  Buttons,
  Button,
  Content,
  Text,
  Quote,
  Author,
} from "./styles";
import { getQuote } from "./API";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("start by clicking the Get Quote button");
  const [author, setAuthor] = useState(undefined);

  const getNewQuote = () => {
    getQuote()
      .then((data) => {
        setQuote(data.quoteText);
        setAuthor(data.quoteAuthor);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <Background>
      <Card>
        <Content>
          <img
            style={{ alignSelf: "flex-start" }}
            src="./quote.png"
            alt="quote"
            width="100px"
          />
          <Text>
            {quote ? (
              <>
                <Quote>{quote}</Quote> {author && <Author>{author}</Author>}
              </>
            ) : (
              <Quote>Something went wrong, click the Get Quote button</Quote>
            )}
          </Text>
        </Content>
        <Buttons>
          <Button disabled={author === undefined} onClick={() => tweetQuote()}>
            Twitter
          </Button>
          <Button onClick={() => getNewQuote()}>Get Quote</Button>
        </Buttons>
      </Card>
    </Background>
  );
};

export default QuoteGenerator;
