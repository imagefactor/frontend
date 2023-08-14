import { FieldValues } from "react-hook-form";
import { queryClient, request } from "@/shared/api";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Введите название группы"),
  rights: Yup.object({
    watchProjects: Yup.boolean(),
    fillSurvey: Yup.boolean(),
    watchStatistic: Yup.boolean(),
  }),
});
export type AddUserGroupFormValues = Yup.InferType<typeof validationSchema>;
export const addUserGroupForm = {
  defaultValues: {
    name: "",
    rights: {
      watchProjects: false,
      fillSurvey: false,
      watchStatistic: false,
    },
  },

  onSubmit: async (data: FieldValues) => {
    await request.post("/UserGroups", data);
    await queryClient.invalidateQueries(["UserGroups"]);
  },

  validationSchema,
};
