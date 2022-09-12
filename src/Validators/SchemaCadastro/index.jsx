import * as yup from "yup";

const schemaCadastro = yup.object().shape({
  name: yup.string().required('Insira o nome da empresa'),
  email: yup.string().email('Insira um email válido').required("Insira um email"),
  password: yup.string().required("Insira um senha").min(8, 'Insira no minimo 8 caracteres'),
  urlLogo: yup.string(),
  contact: yup.string().required('Insira um contato'), 
  category: yup.string().required('Insira a categoria'),
  city: yup.string().required('Insira o nome da cidade'),
  bio: yup.string().required('Insira a bio da empresa').min(20, 'Acresente mais a sua bio')

})
export default schemaCadastro