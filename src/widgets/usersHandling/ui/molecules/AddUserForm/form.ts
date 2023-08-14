import { FieldValues } from "react-hook-form";
import { queryClient, request } from "@/shared/api";
import * as Yup from "yup";

const validationSchema = Yup.object({
  login: Yup.string().required("Введите логин"),
  password: Yup.string().required("Введите пароль"),
  firstName: Yup.string().required("Введите Имя"),
  lastName: Yup.string().required("Введите Фамилию"),
  phone: Yup.string().required("Введите телефон"),
});

export const addUserForm = {
  defaultValues: {
    login: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "+7",
  },

  onSubmit: async (data: FieldValues) => {
    await request.post("/UsersHandling/registration", data);
    await queryClient.invalidateQueries(["usersHandling"]);
  },

  validationSchema,
};
