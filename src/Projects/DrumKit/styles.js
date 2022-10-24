import styled from "styled-components";

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  border: 5px solid black;
  height: 150px;
  width: 150px;
  border-radius: 5px;
  color: yellow;
  text-shadow: 1px 1px 2px yellow;
  transition: 0.007s;

  &.playing {
    transform: scale(1.2);
    border: 5px solid yellow;
    box-shadow: 0px 0px 5px yellow;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url("background.jpg");
  height: 100vh;
`;
