import { useMutation } from "react-query";
import { queryClient, request } from "@/shared/api";
import { useToast } from "@chakra-ui/react";

export const useAddUsersToGroup = (id?: number) => {
  const toast = useToast();

  const addUsersToGroup = (selectedIds: string[]) => {
    return request.post(`/UserGroups/${id}/users/add`, selectedIds);
  };

  const mutation = useMutation(addUsersToGroup, {
    onSuccess: async () => {
      toast({ title: "Пользователи добавлены в группу", status: "success" });
      await queryClient.invalidateQueries("UserGroups");
    },
  });

  return { ...mutation };
};
