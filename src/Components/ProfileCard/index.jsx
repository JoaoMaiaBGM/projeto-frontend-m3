import { useState } from "react";
import { BoxImg, BoxUser, MainContainerBox } from "./styled";
import { useEffect } from "react";

const ProfileCard = () => {
  const [storageUser, setStorageUser] = useState({});
  const userData = localStorage.getItem("@User:Data");

  useEffect(() => {
    setStorageUser(JSON.parse(userData));
  }, [userData]);

  const { urllogo, name, category, city, contact, district } = storageUser;

  return (
    <MainContainerBox>
      <BoxImg src={urllogo} />
      <BoxUser>
        <label>Nome Da Empresa</label>
        <span>{name}</span>
        <label>Categoria</label>
        <span>{category}</span>
        <label>Cidade</label>
        <span>{city}</span>
        <label>Bairro</label>
        <span>{district}</span>
        <label>Contato</label>
        <span>
          <a
            href={`https://wa.me/55${contact}`}
            target='_blank'
            rel='noreferrer'>
            {contact}
          </a>
        </span>
      </BoxUser>
    </MainContainerBox>
  );
};

export default ProfileCard;
