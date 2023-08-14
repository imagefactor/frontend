import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Название списка ответов"),
});

export type EditAnswerFormValues = Yup.InferType<typeof validationSchema>;
export const editAnswerListForm = {
  defaultValues: {
    name: "Название списка ответов",
  },
  validationSchema,
};
