import { useToast } from "@chakra-ui/react";
import { queryClient, request } from "@/shared/api";
import { useMutation } from "react-query";

export const useEditAnswerListItem = (id?: number) => {
  const toast = useToast();

  const addAnswer = (answer: any) => {
    return request.patch(`/AnswerListItem/${id}`, answer);
  };

  return useMutation(addAnswer, {
    onSuccess: async () => {
      toast({ title: "Ответ изменён", status: "success" });
      await queryClient.invalidateQueries("AnswerList");
    },
  });
};
