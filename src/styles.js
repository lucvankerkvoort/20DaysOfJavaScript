import styled from "styled-components";

export const Button = styled.button`
  ${({ position }) =>
    position === "next"
      ? `position: absolute;
        right: 0; 
        top:0;`
      : `position: absolute; 
      left: 0; top:0;`}

  margin: 10px;
  background-color: black;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-family: Edu VIC WA NT Beginner;
  box-shadow: 0px 5px 10px black;
  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: translate(0px, 3px);
    box-shadow: 0px 3px 5px black;
  }
  &:disabled {
    transform: scale(1);
    box-shadow: 0px 5px 10px black;
    color: gray;
    padding: 1rem;
  }
`;
