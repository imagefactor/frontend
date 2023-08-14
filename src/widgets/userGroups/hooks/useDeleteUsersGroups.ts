import { useMutation } from "react-query";
import { queryClient, request } from "@/shared/api";
import { useToast } from "@chakra-ui/react";

export const useDeleteUsersGroups = () => {
  const toast = useToast();

  const deleteGroups = (selectedIds: string[]) => {
    return request.delete(`/UserGroups/${selectedIds.join(",")}`);
  };

  const mutation = useMutation(deleteGroups, {
    onSuccess: async () => {
      toast({ title: "Группы удалены", status: "success" });
      await queryClient.invalidateQueries("UserGroups");
    },
  });

  return { ...mutation };
};
