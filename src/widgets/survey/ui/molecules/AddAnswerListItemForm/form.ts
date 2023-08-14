import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите название списка вопросов"),
});

export type AddAnswerListItemFormValues = Yup.InferType<
  typeof validationSchema
>;

export const addAnswerListItemForm = {
  defaultValues: {
    name: "Новый список ответов",
  },
  validationSchema,
};
