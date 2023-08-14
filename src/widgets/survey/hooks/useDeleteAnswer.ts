import { useMutation } from "react-query";
import { queryClient, request } from "@/shared/api";
import { useToast } from "@chakra-ui/react";

export const useDeleteAnswers = () => {
  const toast = useToast();

  const deleteAnswers = (selectedIds: string[]) => {
    return request.delete(`/AnswerList/${selectedIds.join(",")}`);
  };

  const mutation = useMutation(deleteAnswers, {
    onSuccess: async () => {
      toast({ title: "Вопросы удалены", status: "success" });
      await queryClient.invalidateQueries("AnswerList");
    },
  });

  return { ...mutation };
};
