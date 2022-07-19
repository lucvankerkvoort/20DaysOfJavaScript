import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://wallpaper.dog/large/5486351.jpg");
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
`;
