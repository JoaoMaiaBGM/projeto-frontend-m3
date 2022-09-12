import * as yup from "yup";

const userSchema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatorio"),
  password: yup.string().required("Senha é obrigatória"),
});

export default userSchema;
