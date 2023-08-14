import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите название списка вопросов"),
});

export type AddAnswerFormValues = Yup.InferType<typeof validationSchema>;

export const addAnswerForm = {
  defaultValues: {
    name: "Новый список ответов",
  },
  validationSchema,
};
