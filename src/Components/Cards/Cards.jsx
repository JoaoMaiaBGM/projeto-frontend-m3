import { useState } from "react";
import { useContext } from "react";
import StoreModal from "../ModalStore";
import { Lista } from "./style";
import { Context } from "../../Context/AuthContext";

function Cards() {
  const { lojas } = useContext(Context);
  const [storeData, setStoreData] = useState([]);
  const [isOpenModalStore, setIsOpenModalStore] = useState(false);

  function handleOnClickCard(empresa) {
    setStoreData(empresa);
  }

  return lojas.map((empresa, index) => (
    <>
      <Lista
        key={index}
        onClick={() => {
          setIsOpenModalStore(true);
          handleOnClickCard(empresa);
        }}>
        <div className='cardImg'>
          <img src={empresa.urllogo} alt='logo da empresa' />
        </div>
        <div className='cardInfo'>
          <h2>{empresa.name}</h2>
          <p className='cardCategory'>{empresa.category}</p>
          <p className='cardCity'>
            <strong>Cidade:</strong> {empresa.city}
          </p>
          <p className='cardDistrict'>
            <strong>Bairro:</strong> {empresa.district}
          </p>
          <span>
            <strong>Contato:</strong> {empresa.contact}
          </span>
        </div>
      </Lista>
      <StoreModal
        isOpenModalStore={isOpenModalStore}
        setIsOpenModalStore={setIsOpenModalStore}
        storeData={storeData}
      />
    </>
  ));
}

export default Cards;
