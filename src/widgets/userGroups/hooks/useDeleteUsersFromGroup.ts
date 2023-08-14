import { useMutation } from "react-query";
import { queryClient, request } from "@/shared/api";
import { useToast } from "@chakra-ui/react";

export const useDeleteUsersFromGroup = (id?: number) => {
  const toast = useToast();

  const deleteUsersFromGroups = (selectedIds: string[]) => {
    return request.post(`/UserGroups/${id}/users/remove`, selectedIds);
  };

  const mutation = useMutation(deleteUsersFromGroups, {
    onSuccess: async () => {
      toast({ title: "Пользователи удалены из группы", status: "success" });
      await queryClient.invalidateQueries("UserGroups");
    },
  });

  return { ...mutation };
};
