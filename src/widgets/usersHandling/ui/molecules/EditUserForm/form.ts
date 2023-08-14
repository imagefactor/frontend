import * as Yup from "yup";

const validationSchema = Yup.object({
  userName: Yup.string().required("Введите логин"),
  firstName: Yup.string().required("Введите Имя"),
  lastName: Yup.string().required("Введите Фамилию"),
  phone: Yup.string().required("Введите телефон"),
});

export const editUserForm = {
  validationSchema,
};
