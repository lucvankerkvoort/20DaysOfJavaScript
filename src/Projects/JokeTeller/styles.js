import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  border: 0.1px solid black;
  background-color: #45badd;
  background-image: url("./robot.gif");
  background-repeat: no-repeat;
  background-position: 0% 0%;

  @media (max-width: 1200px) {
    background: #45badd; 
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const Button = styled.button`
  margin: 0rem 5rem;
  background-color: black;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 2.5rem;
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

export const Title = styled.p`
  font-weight: bold;
  margin: 0 0 2rem 0;
  font-family: Lobster;
  font-size: 5rem;
  color: white;
  text-shadow: 5px 5px 3px black;
`;

export const Video = styled.video`
  box-shadow: 20px 20px 15px black;
  padding: 15px;
  background: white;
`;

export const Transcript = styled.p`
  font-family: Edu VIC WA NT Beginner;
  margin: 2rem;
`;
