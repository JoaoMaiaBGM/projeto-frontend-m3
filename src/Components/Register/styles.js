import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isOpenModalRegister ? "flex" : "none")};
  position: absolute;
  top: 0%;
  justify-content: center;
  align-items: center;

  overflow-y: auto;

  background-color: ${({ theme }) => theme.backgroundModal};
`;

export const Modal = styled.div`
  width: 80%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.primaryBlue};

  padding: 2rem 1rem;
  border-radius: 0.5rem;
  gap: 1rem;

  -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @media screen and (min-width: 450px) {
    width: 360px;
  }

  @media screen and (min-width: 1000px) {
    width: 800px;
    height: 450px;
  }

  h2 {
    font-size: 25px;
    font-weight: bold;
    font-family: "Roboto";
    text-align: center;

    color: white;
  }
`;

export const FormuRegister = styled.form`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  border-radius: 0.5rem;
  gap: 0.2rem 0;
  padding: 1rem 0;

  @media screen and (min-width: 1000px) {
    height: 380px;

    gap: 1rem 0;
    padding-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 2px;

    @media screen and (min-width: 1000px) {
      width: 300px;
    }

    input {
      display: flex;
      width: inherit;
      height: 2rem;

      border-radius: 0.5rem;
      border: 1px solid black;

      margin: 0 auto;
      padding-left: 1rem;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;

      @media screen and (min-width: 1000px) {
        width: 270px;
        height: 2.5rem;
      }
    }

    .text-bio {
      display: flex;
      width: 90%;
      height: 3rem;

      border-radius: 0.5rem;
      padding: 0.5rem;
      margin: 0 auto;

      resize: none;

      @media screen and (min-width: 1000px) {
        width: 270px;
        height: 7rem;
        border-radius: 0.5rem;
      }
    }

    select {
      display: flex;
      width: 97%;
      height: 2.3rem;

      border-radius: 0.5rem;
      border: 1px solid black;

      padding-left: 0.8rem;
      margin: 0 auto;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      color: ${(props) => props.theme.secondaryGray};

      @media screen and (min-width: 1000px) {
        width: 290px;
        height: 2.6rem;
      }
    }
    p {
      height: 15px;
      font-size: 15px;
      font-family: "Roboto";
      font-weight: 500;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.negative};

      @media screen and (min-width: 1000px) {
      }
    }
  }
  button {
    width: max-content;
    height: 4rem;

    padding: 0 5rem;
    border-radius: 0.5rem;
    border: transparent;

    background-color: ${({ theme }) => theme.backgroundButton};
    color: white;

    font-family: "Roboto";
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const SectionContainer = styled.section`
  width: 90%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 999px) {
    justify-content: center;
  }

  .registerBtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
