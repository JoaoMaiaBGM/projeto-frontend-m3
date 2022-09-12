import styled, { keyframes } from "styled-components";

const animationHome = keyframes`
  to{
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation: ${animationHome} 1s forwards;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 700px) {
    gap: 5rem;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 20%);

  h1 {
    font-family: "Roboto";
    font-weight: 800;
    font-size: 75px;
    font-style: bold;
    color: ${(props) => props.theme.primaryBlue};
    margin-left: 5px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 1rem;
    height: max-content;

    div {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }
  }
`;

export const ButtonBlue = styled.button`
  width: 150px;
  height: 95%;

  background-color: ${(props) => props.theme.primaryBlue};
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-right: 5px;
  cursor: pointer;

  font-family: "Roboto";
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 700px) {
    height: 60px;
  }
`;

export const ButtonBlack = styled.button`
  height: 80%;

  border: none;
  background-color: inherit;
  cursor: pointer;

  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.theme.black};
`;

export const MainContainer = styled.main`
  width: 100vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
  h2 {
    width: 494px;
    height: 129px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 15px;
    /* or 30% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;
