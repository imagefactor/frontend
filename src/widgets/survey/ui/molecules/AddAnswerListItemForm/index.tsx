import { useYupValidationResolver } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { Button, Stack } from "@chakra-ui/react";
import { TextInput } from "@/shared/ui";
import { addAnswerListItemForm, AddAnswerListItemFormValues } from "./form";
import { useAddAnswerListItem } from "@/widgets/survey/hooks/useAddAnswerListItem";

type Props = {
  onClose: () => void;
};
export const AddAnswerListItemForm = ({ onClose }: Props) => {
  const resolver = useYupValidationResolver(
    addAnswerListItemForm.validationSchema,
  );

  const methods = useForm<AddAnswerListItemFormValues>({
    defaultValues: addAnswerListItemForm.defaultValues,
    resolver,
  });

  const { mutate: addAnswerListItem } = useAddAnswerListItem();

  const onSubmit = async (data: AddAnswerListItemFormValues) => {
    addAnswerListItem(data);
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
