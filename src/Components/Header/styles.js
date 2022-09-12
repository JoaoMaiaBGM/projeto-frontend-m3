import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 20%);

  @media screen and (max-width: 575px) {
    height: 150px;
  }
`;
export const HeaderContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Roboto";
    font-weight: 800;
    font-size: 75px;
    font-style: bold;
    color: ${(props) => props.theme.primaryBlue};
  }

  @media screen and (max-width: 575px) {
    width: 100%;
    height: 130px;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 50px;
    }
  }

  // A estilização a baixo é para ser copiada e colada no arquivo styles da página que você está criando.
  // coloque um className para cada botão para a estilização funcionar.
  // depois descomente

  /* .classNameDoBotao {
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
}

.classNameDoBotao {
  height: 80%;

  border: none;
  background-color: inherit;

  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.theme.black};
}

 @media screen and (max-width: 425px) {
    width: 100%;
    margin-top: 5px;

    .classNameDoBotao {
      width: 40vw;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      font-weight: 400;
    }

    .classNameDoBotao {
      width: 60vw;
      height: 60px;
      display: flex;
      align-items: center;
      font-size: 18px;
    }
  }

 */
`;
