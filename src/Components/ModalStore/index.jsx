import logoWhatsapp from "../../Assets/WhatsApp.svg";

import { Container, Modal } from "./styles";

const StoreModal = ({
  id = "modal",
  isOpenModalStore,
  setIsOpenModalStore,
  storeData,
}) => {
  function handleRedirectWhatsapp() {
    window.open(
      `http://api.whatsapp.com/send?1=pt_BR&phone=${storeData.contact}`,
      "_system",
      "location=yes"
    );
    return false;
  }

  function handleOutsideClick(e) {
    if (e.target.id === id) {
      setIsOpenModalStore(false);
    }
  }

  return (
    <Container
      id={id}
      isOpenModalStore={isOpenModalStore}
      onClick={handleOutsideClick}>
      <Modal>
        <div className='logoModal'>
          <img
            className='logoStoreModal'
            src={storeData.urllogo}
            alt='Logo da loja'
          />
        </div>
        <div className='infoModal'>
          <h3>{storeData.name}</h3>
          <p>{storeData.bio}</p>
          <p>
            <strong>Bairro:</strong> {storeData.district}
          </p>
          <div className='contact'>
            <img
              className='logoWhatsapp'
              src={logoWhatsapp}
              alt='logomarca do Whatsapp'
              onClick={handleRedirectWhatsapp}
            />
            <a
              href={`https://wa.me/55${storeData.contact}`}
              className='contactInfo'
              target='_blank'
              rel='noreferrer'>
              {storeData.contact}
            </a>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default StoreModal;
