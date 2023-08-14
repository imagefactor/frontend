import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите название группы"),
  rights: Yup.object({
    watchProjects: Yup.boolean(),
    fillSurvey: Yup.boolean(),
    watchStatistic: Yup.boolean(),
  }),
});

export const editUserGroupForm = {
  validationSchema,
};
