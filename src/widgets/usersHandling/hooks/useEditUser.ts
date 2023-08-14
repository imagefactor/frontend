import { useMutation, useQuery } from "react-query";
import { queryClient, request } from "@/shared/api";

export const useEditUser = (id?: number) => {
  const editUser = (userData: any) => {
    return request.put("/UsersHandling", userData);
  };

  const getUser = () => {
    return request.get(`/UsersHandling/user/${id}`);
  };

  const response = useQuery({
    queryKey: ["edit-user"],
    queryFn: getUser,
  });

  const mutate = useMutation(editUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("usersHandling");
    },
  });

  return { ...mutate, ...response };
};
