import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("./seamless-quotation-marks-pattern_1635607.jpeg");
`;

export const Card = styled.div`
  height: 15rem;
  width: 50rem;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  margin: 0px 10px;
  max-height: 20%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  box-shadow: 0px 5px 10px black;
  transform: 2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translate(0px, 3px);
    box-shadow: 0px 5px 3px black;
  }
  &:disabled {
    color: gray;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 80%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 40px;
`;

export const Quote = styled.p`

font-weight: bold;
font-family: Edu VIC WA NT Beginner;
font-size: 1.5rem;
}}`;

export const Author = styled.p`
  font-style: italic;
  font-size: 1.5rem;
`;
