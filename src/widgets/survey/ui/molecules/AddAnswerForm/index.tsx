import { useYupValidationResolver } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { Button, Stack } from "@chakra-ui/react";
import { TextInput } from "@/shared/ui";
import { useAddAnswer } from "@/widgets/survey/hooks";
import { addAnswerForm, AddAnswerFormValues } from "./form";

type Props = {
  onClose: () => void;
};
export const AddAnswerForm = ({ onClose }: Props) => {
  const resolver = useYupValidationResolver(addAnswerForm.validationSchema);

  const methods = useForm<AddAnswerFormValues>({
    defaultValues: addAnswerForm.defaultValues,
    resolver,
  });

  const { mutate: addAnswer } = useAddAnswer();

  const onSubmit = async (data: AddAnswerFormValues) => {
    addAnswer(data);
    onClose();
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Stack direction="column">
        <TextInput
          label="Наименование"
          placeholder="Наименование"
          {...methods.register("name")}
        />
        <Button type="submit">Сохранить</Button>
      </Stack>
    </form>
  );
};
