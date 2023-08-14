import { useMutation } from "react-query";
import { queryClient, request } from "@/shared/api";

export const useEditUserProfile = () => {
  const editUserProfile = (userProfileData: any) => {
    return request.patch("/Account/me", userProfileData); // тут нет пока что
  };

  const mutate = useMutation(editUserProfile, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("profile");
    },
  });

  return { ...mutate };
};
