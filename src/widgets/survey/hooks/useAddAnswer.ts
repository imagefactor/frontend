import { useToast } from "@chakra-ui/react";
import { queryClient, request } from "@/shared/api";
import { useMutation } from "react-query";

export const useAddAnswer = () => {
  const toast = useToast();

  const addAnswer = (answer: any) => {
    return request.post(`/AnswerList`, answer);
  };

  const mutation = useMutation(addAnswer, {
    onSuccess: async () => {
      toast({ title: "Вопрос добавлен", status: "success" });
      await queryClient.invalidateQueries("AnswerList");
    },
  });

  return { ...mutation };
};
