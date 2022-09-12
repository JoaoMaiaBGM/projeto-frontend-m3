import styled, { keyframes } from "styled-components";

const animationDashboard = keyframes`
  to{
    opacity: 1;
  }
`;

export const Corpo = styled.body`
  width: 100%;
  animation: ${animationDashboard} 1s forwards;
  opacity: 0;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 84%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;

    gap: 0 30px;

    @media screen and (max-width: 1000px) {
      width: 95%;
      height: 100vh;

      display: flex;
      flex-direction: column;
      overflow-x: scroll;
    }
  }
`;
export const Botao = styled.button`
  width: 150px;
  height: 80%;

  background-color: ${(props) => props.theme.primaryBlue};
  border: none;
  border-radius: 8px;
  padding: 8px;

  font-family: "Roboto";
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  @media screen and (max-width: 425px) {
    width: 130px;
    height: 40%;
  }

  @media screen and (max-width: 900px) {
    width: 150px;
  }
`;

export const styleLink = {
  width: "20%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
};
