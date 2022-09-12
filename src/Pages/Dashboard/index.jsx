import Header from "../../Components/Header";
import FormDashBoard from "../../Components/formDashboard/fomDash";
import { Botao, Corpo, Main } from "./style";
import Cards from "../../Components/Cards/Cards";

import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const Board = () => {
  const { handleLogout } = useContext(Context);
  return (
    <Corpo>
      <Header>
        <Botao onClick={handleLogout}>Sair</Botao>
      </Header>
      <FormDashBoard />
      <Main>
        <ul>
          <Cards></Cards>
        </ul>
      </Main>
    </Corpo>
  );
};

export default Board;
