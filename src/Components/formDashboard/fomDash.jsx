import { FormDash } from "./style";
import { Option } from "./style";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const FormDashBoard = () => {
  const { setCategoria, setInputCidade } = useContext(Context);

  return (
    <FormDash onSubmit={(event) => event.preventDefault()}>
      <div>
        <select onChange={(evento) => setCategoria(evento.target.value)}>
          <Option value="">Selecione Categoria</Option>

          <option>Restaurante</option>
          <option>Vestuário</option>
          <option>Tecnologia</option>
          <option>Comunicação</option>
          <option>Supermercado</option>
        </select>

        <input
          onChange={(evento) => setInputCidade(evento.target.value)}
          placeholder="Digite bairro ou cidade"
        ></input>

        {/* <button onClick={() => handleFilter()}>Pesquisar</button> */}
      </div>
    </FormDash>
  );
};

export default FormDashBoard;
