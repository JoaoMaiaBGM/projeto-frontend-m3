import ProfileCard from "../../Components/ProfileCard";
import { useState } from "react";
import Register from "../../Components/Register/Register";
import { useContext } from "react";

import { Context } from "../../Context/AuthContext";

import {
  ButtonBlack,
  ButtonBlue,
  Container,
  HeaderContainer,
  MainContainer,
} from "./styles";

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
