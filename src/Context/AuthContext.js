import { toast } from "react-toastify";
import React, { createContext, useEffect, useState } from "react";
import Api from "../Services/api";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Token = localStorage.getItem("@User:Token");
    
    if (Token) {
      Api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        Token
      )}`;
      setAuthenticated(true);
      setLoading(false);
    }
  }, []);

  async function handleLogin(userData) {
    const {
      data: { accessToken, user },
    } = await Api.post("/login", userData).catch((err) => {
      toast.error("Email ou senha inválido!");
    });
    if (user) {
      toast.success("login feito com sucesso!");
    }

    localStorage.setItem("@User:Token", JSON.stringify(accessToken));
    localStorage.setItem("@User:Data", JSON.stringify(user));

    Api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    navigate("/profile", { replace: true });
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("@User:Token");
    localStorage.removeItem("@User:Data");

    Api.defaults.headers.common["Authorization"] = null;
    navigate("/home", { replace: true });
  }

  const [inputCidade, setInputCidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    Api.get("/users")
      .then(({ data }) => {
        /* console.log(data.city); */
        if (inputCidade === "" && categoria === "") {
          return setLojas(data);
        } else if (inputCidade !== "") {
          const filter = data.filter(
            (element) =>
              element.city.toLowerCase().includes(inputCidade.toLowerCase()) ||
              element.district.toLowerCase().includes(inputCidade.toLowerCase())
          );
          return setLojas(filter);
        } else {
          const filter = data.filter((element) => {
            return categoria
              .toLowerCase()
              .includes(element.category.toLowerCase());
          });
          return setLojas(filter);
        }
      })
      .catch((errors) => console.log(errors));
  }, [inputCidade, categoria, lojas]);

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        handleLogout,
        setCategoria,
        setInputCidade,
        lojas,
        setIsOpenModalLogin,
        isOpenModalLogin,
      }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
