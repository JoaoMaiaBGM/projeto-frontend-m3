import styled, { keyframes } from "styled-components";

const animationHome = keyframes`
  to{
    opacity: 1;
  }
`;

export const Container = styled.section`
animation: ${animationHome} 1s forwards;
opacity: 0;

`

export const NavContainer = styled.nav`
  width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .storeLogin {
    width: 40%;
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
  }

  .storeRegister {
    height: 80%;

    border: none;
    background-color: inherit;

    font-family: "Roboto";
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    color: ${(props) => props.theme.black};
    cursor: pointer;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    margin-top: 5px;

    .storeLogin {
      width: 40vw;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      font-weight: 400;
    }

    .storeRegister {
      width: 60vw;
      height: 60px;
      display: flex;
      align-items: center;
      font-size: 18px;
    }
  }
`;

export const MainContainer = styled.main`
  width: 100%;

  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;

    padding: 0 20px;

    button {
      width: 60%;
      height: 55px;

      background-color: #0ec991;

      border-radius: 10px;
      border: none;
      margin-right: 3%;

      font-family: "Roboto";
      font-size: 26px;
      font-weight: 500;
      color: ${(props) => props.theme.white};

      cursor: pointer;
    }

    p {
      max-width: 430px;
      margin-bottom: 20px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      color: ${(props) => props.theme.black};

      text-align: justify;
      line-height: 50px;
    }
  }

  div {
    max-height: 100vh;

    img {
      width: 600px;
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 50px;

    section {
      height: 50vh;
      justify-content: space-around;
      align-items: center;

      p {
        font-size: 25px;
        font-weight: 700;
        line-height: 40px;
      }

      button {
        width: 100%;
        height: 55px;

        padding: 10px;

        font-size: 25px;
      }
    }

    div {
      max-height: 100vh;

      position: fixed;
      z-index: -1;
      opacity: 15%;

      img {
        width: 500px;
        height: 450px;
        margin-left: -70px;
      }
    }
  }

  @media screen and (min-width: 426px) and (max-width: 900px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 100px;

    section {
      height: 40vh;
      justify-content: space-around;
      align-items: center;

      p {
        font-size: 35px;
        font-weight: 700;
      }

      button {
        width: 100%;
        height: 55px;

        padding: 10px;

        font-size: 25px;
      }
    }

    div {
      max-height: 100vh;

      position: fixed;
      z-index: -1;
      opacity: 12%;

      img {
        width: 900px;
        height: 550px;
      }
    }
  }
`;
