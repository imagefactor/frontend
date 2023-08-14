import { useMutation, useQuery } from "react-query";
import { queryClient, request } from "@/shared/api";

export const useEditAnswer = (id?: number) => {
  const editAnswer = (answerData: any) => {
    return request.put(`/AnswerList/${id}`, answerData);
  };

  const getAnswerList = () => {
    return request.get(`/AnswerList/${id}`);
  };

  const response = useQuery({
    queryKey: ["edit-answer-list"],
    queryFn: getAnswerList,
  });

  const mutate = useMutation(editAnswer, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("AnswerList");
    },
  });

  return { ...mutate, ...response };
};
