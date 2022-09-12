import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HomeArt from "../../Assets/HomeArt.svg";
import Header from "../../Components/Header";
import LoginModal from "../../Components/Login";
import Register from "../../Components/Register/Register";

import { NavContainer, MainContainer, Container } from "./styles";
import { Context } from "../../Context/AuthContext";

const HomePage = () => {
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const { setIsOpenModalLogin } = useContext(Context);

  return (
    <Container>
      <Header>
        <NavContainer>
          <button
            className="storeRegister"
            type="button"
            onClick={() => setIsOpenModalRegister(true)}
          >
            Seja empresa parceira
          </button>
          <button
            className="storeLogin"
            type="buton"
            onClick={() => setIsOpenModalLogin(true)}
          >
            Login Empresa
          </button>
        </NavContainer>
      </Header>
      <MainContainer>
        <section>
          <p>
            Quer descobrir lojas que estão na sua cidade? Entre e encontre nosso
            parceiro mais próximo de você.
          </p>
          <Link to="/dashboard">
            <button>Pesquisar Lojas</button>
          </Link>
        </section>
        <div>
          <img src={HomeArt} alt="arte gráfica da home page" />
        </div>
      </MainContainer>
      <LoginModal />
      <Register
        text="Cadastrar"
        isOpenModalRegister={isOpenModalRegister}
        setIsOpenModalRegister={setIsOpenModalRegister}
      />
    </Container>
  );
};

export default HomePage;
