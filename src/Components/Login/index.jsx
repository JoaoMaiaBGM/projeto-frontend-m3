import { DivModal, DivForm, DivInput, Container, Error } from "../Login/styles";
import "./styles";
import userSchema from "../../Validators/SchemaLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

function LoginModal({ id = "modal" }) {
  const { handleLogin, setIsOpenModalLogin, isOpenModalLogin } =
    useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  function handleOutsideClick(e) {
    if (e.target.id === id) {
      setIsOpenModalLogin(false);
    }
  }

  return (
    <Container
      id={id}
      isOpenModalLogin={isOpenModalLogin}
      onClick={handleOutsideClick}>
      <DivModal>
        <h2>Login</h2>
        <DivForm>
          <form onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor='email'></label>
            <DivInput>
              <input
                type='text'
                id='email'
                placeholder='Email'
                {...register("email")}
              />
              <Error>{errors.email?.message}</Error>
            </DivInput>
            <label htmlFor='password'></label>
            <DivInput>
              <input
                type='password'
                placeholder='Senha'
                id='password'
                {...register("password")}
              />
              <Error>{errors.password?.message}</Error>
            </DivInput>
            <button type='submit'>Entrar</button>
          </form>
        </DivForm>
      </DivModal>
    </Container>
  );
}

export default LoginModal;
