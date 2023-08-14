import { useToast } from "@chakra-ui/react";
import { queryClient, request } from "@/shared/api";
import { useMutation } from "react-query";

export const useAddAnswerListItem = () => {
  const toast = useToast();

  const addAnswerListItem = (answer: any) => {
    return request.post(`/AnswerListItem`, answer);
  };

  const mutation = useMutation(addAnswerListItem, {
    onSuccess: async () => {
      toast({ title: "Вариант ответа добавлен", status: "success" });
      await queryClient.invalidateQueries("AnswerListItem");
    },
  });

  return { ...mutation };
};
