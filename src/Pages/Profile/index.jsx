import ProfileCard from "../../Components/ProfileCard";
import { useState } from "react";
import {
  ButtonBlack,
  ButtonBlue,
  Container,
  HeaderContainer,
  MainContainer,
} from "./styles";

import Register from "../../Components/Register/Register";

import { useContext } from "react";

import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { handleLogout } = useContext(Context);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <h1>DuBairro</h1>
        <div>
          <ButtonBlack onClick={() => setIsOpenModalRegister(true)}>
            Editar Perfil
          </ButtonBlack>
          <ButtonBlue onClick={handleLogout}>Sair</ButtonBlue>
        </div>
      </HeaderContainer>
      <MainContainer>
        <h2>Perfil da Empresa</h2>
        <ProfileCard />
      </MainContainer>
      <Register
        text='Salvar'
        isOpenModalRegister={isOpenModalRegister}
        setIsOpenModalRegister={setIsOpenModalRegister}
      />
    </Container>
  );
};

export default Profile;
