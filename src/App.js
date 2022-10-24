import React, { useState } from "react";
import { Button } from "./styles";
import QuoteGenerator from "./Projects/QuoteGenerator";
import InfiniteScroll from "./Projects/InfiniteScroll";
import PictureInPicture from "./Projects/PictureInPicture";
import JokeTeller from "./Projects/JokeTeller";
import TicTacToe from "./Projects/TicTacToe";
import DrumKit from "./Projects/DrumKit";
import "./App.css";

const application = [
  <DrumKit />,
  <QuoteGenerator />,
  <InfiniteScroll />,
  <PictureInPicture />,
  <JokeTeller />,
  <TicTacToe />,
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="App">
      <Button
        position="previous"
        onClick={() => {
          if (currentPage >= 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        style={{ position: "absolute", left: "0", top: "0" }}
      >
        Previous
      </Button>
      <Button
        position="next"
        onClick={() => {
          if (currentPage < application.length - 1) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        Next
      </Button>
      {application.map((app, i) => {
        return i === currentPage && app;
      })}
    </div>
  );
}

export default App;
