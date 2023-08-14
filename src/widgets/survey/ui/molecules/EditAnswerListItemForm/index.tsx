import { useForm } from "react-hook-form";
import { Button, Stack } from "@chakra-ui/react";
import { TextInput } from "@/shared/ui";
import { useYupValidationResolver } from "@/shared/hooks";
import { useEditAnswerListItem } from "@/widgets/survey/hooks";
import * as React from "react";
import {
  editAnswerListForm,
  EditAnswerFormValues,
} from "./../EditAnswerForm/form";

type Props = {
  onClose: () => void;
  currentAnswerListItemId?: number;
};

export const EditAnswerListItemForm = ({
  onClose,
  currentAnswerListItemId,
}: Props) => {
  const resolver = useYupValidationResolver(
    editAnswerListForm.validationSchema,
  );

  const methods = useForm<EditAnswerFormValues>({
    defaultValues: editAnswerListForm.defaultValues,
    resolver,
  });

  const { mutate: editAnswers } = useEditAnswerListItem(
    currentAnswerListItemId,
  );
  const onSubmit = async (data: EditAnswerFormValues) => {
    editAnswers(data);
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
