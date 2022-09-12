import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isOpenModalStore ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.backgroundModal};
`;

export const Modal = styled.div`
  width: 60%;
  height: 60vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  padding: 10px;
  gap: 2rem;

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

  .logoStoreModal {
    width: 320px;

    display: flex;
    justify-content: center;
    border-radius: 1rem;
  }

  .infoModal {
    width: 55%;
    height: 85%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: ${(props) => props.theme.black};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme.black};
    margin-right: 3rem;

    text-align: justify;
    line-height: 35px;

    strong {
      font-weight: 700;
    }
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    margin-bottom: -30px;
  }

  .contact {
    display: flex;
    flex-direction: row;
    gap: 8px;

    /* margin-top: -25px; */
  }

  .contactInfo {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: ${(props) => props.theme.black};
  }

  .logoWhatsapp {
    width: 35px;

    display: flex;
    justify-content: center;

    cursor: pointer;
  }

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

  @media screen and (max-width: 767px) {
    width: 90%;
    height: 90vh;

    display: flex;
    flex-direction: column;

    .logoStoreModal {
      width: 70%;
      margin: 0 auto;
      margin-bottom: 10px;
    }

    .infoModal {
      width: 100%;

      display: flex;
      align-items: center;
    }

    h3 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
      line-height: 28px;
    }

    span {
      margin-left: -200px;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 60%;
    height: max-content;

    display: flex;
    flex-direction: column;

    gap: 0;
    padding: 2rem;

    .logoStoreModal {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 10px;
    }

    .infoModal {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h3 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
      line-height: 28px;
      margin-right: 0;
    }

    span {
      display: none;
    }

   
  }
`;
