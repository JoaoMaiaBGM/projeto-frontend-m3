import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isOpenModalLogin ? "flex" : "none")};
  position: absolute;
  top: 0%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundModal};
`;

export const DivModal = styled.div`
  width: 88%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryBlue};
  padding: 2rem 1.5rem;
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

  @media screen and (min-width: 350px) {
    width: 347px;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    font-family: "Roboto";
    text-align: center;
    color: white;
    margin-top: -5%;
    margin-bottom: 1%;
  }
`;

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 0.5rem;
  gap: 0.2rem 0;
  padding: 1rem 0;
  form {
    width: 90%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }
  input {
    display: flex;
    width: inherit;
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    padding-left: 1rem;

    font-family: Roboto;
    font-size: 20px;
  }
  button {
    background-color: #0ec991;
    color: white;
    width: 45%;
    height: 45px;
    border-radius: 10px;
    border: none;
    margin-right: 3%;

    font-family: "Roboto";
    font-size: 20px;
    cursor: pointer;
  }
`;

export const DivInput = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
`;

export const Error = styled.span`
  font-size: 90%;
  font-family: "Roboto";
  color: ${({ theme }) => theme.negative};
  font-weight: bold;
  margin-left: 5%;
  margin-top: 1%;
`;
