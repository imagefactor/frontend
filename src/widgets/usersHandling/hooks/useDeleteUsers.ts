import { useMutation } from "react-query";
import { queryClient, request } from "@/shared/api";
import { useToast } from "@chakra-ui/react";

export const useDeleteUsers = () => {
  const toast = useToast();

  const deleteUsers = (selectedIds: string[]) => {
    return request.delete(`/UsersHandling/user/${selectedIds.join(",")}`);
  };

  const mutation = useMutation(deleteUsers, {
    onSuccess: async () => {
      toast({ title: "Пользователи удалены", status: "success" });
      await queryClient.invalidateQueries("usersHandling");
    },
  });

  return { ...mutation };
};
