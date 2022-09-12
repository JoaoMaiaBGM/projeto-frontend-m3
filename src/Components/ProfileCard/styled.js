import styled from "styled-components";

export const MainContainerBox = styled.div`
  height: max-content;
  width: 50vw;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;


  gap: 1rem;



  @media screen and (max-width: 1300px) {
    width: 655px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 29rem;
  }


`;

export const BoxImg = styled.img`
  width: 50%;
  height: 80%;
  margin-top: 18px;
  border-radius: 2rem;


  @media screen and (min-width: 1500px) {
    width: 375px;
  }
`;

export const BoxUser = styled.div`
  width: 40%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-right: 5px;
  padding: 2rem 0;

  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    /* line-height: 33px; */

    display: flex;
    align-items: center;

    color: #000000;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 21.9733px;
    line-height: 26px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 150px;

    color: #000000;
  }
`;
