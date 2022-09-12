import styled from "styled-components";

export const Lista = styled.li`
  width: 45%;
  height: 190px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  background-color: #f8f9fa;
  margin-top: 21px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 20%);
  border-radius: 8px;

  cursor: pointer;

  div {
    box-sizing: border-box;
    padding: 8px;
  }

  .cardImg {
    width: 45%;
  }

  img {
    width: 170px;
    height: 170px;

    border-radius: 8px;
  }

  .cardInfo {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: ${(props) => props.theme.black};
  }

  .cardCategory {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: ${(props) => props.theme.terciaryGray};
  }

  .cardCity,
  .cardDistrict,
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    strong {
      font-weight: 600;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 40vw;
  }

  @media screen and (max-width: 1000px) {
    width: 55%;
    height: 80%;

    display: flex;
    flex-direction: column;

    .cardImg {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
    }

    img {
      width: 300px;
      height: 100%;

      border-radius: 8px;
    }

    .cardInfo {
      width: 100%;
      height: 50%;
    }

    h2 {
      font-size: 32px;
    }

    .cardCategory {
      font-size: 22px;
    }

    .cardCity {
      font-size: 28px;
    }

    span {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 80%;

    .cardImg {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;

      border-radius: 8px;
    }
  }
`;
