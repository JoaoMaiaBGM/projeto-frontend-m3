import { Container, Modal, FormuRegister, SectionContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCadastro from "../../Validators/SchemaCadastro";
import Api from "../../Services/api";
import { toast } from "react-toastify";

import { Context } from "../../Context/AuthContext";
import { useContext } from "react";

const Register = ({
  id = "modal",
  text,
  isOpenModalRegister,
  setIsOpenModalRegister,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCadastro),
  });

  const { setIsOpenModalLogin } = useContext(Context);
  const onSubmitCadastro = (data) => {
    Api.post("/register", data)
      .then((response) => {
        toast.success("Cadastro de empresa realizado!");

        setIsOpenModalRegister(false);
        setIsOpenModalLogin(true);
      })
      .catch((error) => console.log(error));
  };

  function handleOutsideClick(e) {
    if (e.target.id === id) {
      setIsOpenModalRegister(false);
    }
  }

  return (
    <Container
      id={id}
      isOpenModalRegister={isOpenModalRegister}
      onClick={handleOutsideClick}
    >
      <Modal>
        <h2>Informações da empresa</h2>
        <FormuRegister onSubmit={handleSubmit(onSubmitCadastro)}>
          <SectionContainer>
            <div>
              <input
                type="text"
                placeholder="Nome da empresa"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </div>

            <div>
              <input type="text" placeholder="Email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>

            <div>
              <input type="text" placeholder="Cidade" {...register("city")} />
              <p>{errors.city?.message}</p>
            </div>

            <div>
              <input
                type="Number"
                placeholder="Contato"
                {...register("contact")}
              />
              <p>{errors.contact?.message}</p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Bairro"
                {...register("district")}
              />
              <p>{errors.district?.message}</p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Url da imagem "
                {...register("urllogo")}
              />
              <p></p>
            </div>

            <div>
              <select name="" id="" {...register("category")}>
                <option value="Vestuário">Vestuário</option>
                <option value="Supermercado">Supermercado</option>
                <option value="Restaurante">Restaurante</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Comunicacao">Comunicação</option>
              </select>
              <p>{errors.category?.message}</p>
            </div>

            <div>
              <textarea {...register("bio")} className="text-bio" />
              <p>{errors.bio?.message}</p>
            </div>

            <div className="registerBtn">
              <button type="submit">{text}</button>
            </div>
          </SectionContainer>
        </FormuRegister>
      </Modal>
    </Container>
  );
};

export default Register;
