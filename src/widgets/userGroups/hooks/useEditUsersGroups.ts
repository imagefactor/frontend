import { useMutation, useQuery } from "react-query";
import { queryClient, request } from "@/shared/api";

export const useEditUserGroup = (id?: number) => {
  const editUserGroup = (userGroupData: any) => {
    return request.patch("/UsersGroups", userGroupData);
  };

  const getUserGroup = () => {
    return request.get(`/UsersGroups/${id}`);
  };

  const response = useQuery({
    queryKey: ["edit-user-group"],
    queryFn: getUserGroup,
  });

  const mutate = useMutation(editUserGroup, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("UsersGroups");
    },
  });

  return { ...mutate, ...response };
};
