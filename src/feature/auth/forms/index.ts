import * as Yup from "yup";
import { FieldValues } from "react-hook-form";

const validationSchema = Yup.object({
  login: Yup.string().required("Введите логин"),
  password: Yup.string().required("Введите пароль"),
  rememberMe: Yup.boolean(),
});

export type LoginFormValues = Yup.InferType<typeof validationSchema>;

export const loginForm = {
  defaultValues: {
    login: "",
    password: "",
    rememberMe: false,
  },

  onSubmit: async (data: FieldValues) => {
    console.log(data);
    // const res = await request.post("/Account/login", data)
    // await queryClient.setQueryData("profile", res.data.userInfo)
  },

  validationSchema,
};
