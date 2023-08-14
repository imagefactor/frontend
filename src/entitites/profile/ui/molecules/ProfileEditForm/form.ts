import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  userName: Yup.string().required(),
});

export const editUserProfileForm = {
  validationSchema,
};
