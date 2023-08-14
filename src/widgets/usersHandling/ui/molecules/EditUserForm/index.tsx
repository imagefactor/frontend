import { Button, Stack, useToast } from "@chakra-ui/react";
import { TextInput } from "@/shared/ui";
import { FieldValues, useForm } from "react-hook-form";
import { useYupValidationResolver } from "@/shared/hooks";
import { useEditUser } from "@/widgets/usersHandling/hooks";
import { editUserForm } from "./form";

type Props = {
  onClose: () => void;
  currentUserId?: number;
};

export const EditUserForm = ({ onClose, currentUserId }: Props) => {
  const { mutate, data } = useEditUser(currentUserId);

  const resolver = useYupValidationResolver(editUserForm.validationSchema);

  const methods = useForm({
    defaultValues: data,
    resolver,
  });

  const toast = useToast();

  const onSubmit = async (data: FieldValues) => {
    mutate(data);
    onClose();
    toast({ title: "Пользователь изменён", status: "success" });
  };

  return (
    <div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap="15px" direction="column">
          <TextInput
            label="Логин"
            placeholder="Логин"
            {...methods.register("userName")}
          />
          <TextInput
            label="Имя"
            placeholder="Имя"
            {...methods.register("firstName")}
          />
          <TextInput
            label="Фамилия"
            placeholder="Фамилия"
            {...methods.register("lastName")}
          />
          <TextInput
            label="Телефон"
            placeholder="Телефон"
            {...methods.register("phone")}
          />
          <Button type="submit" colorScheme="green">
            Изменить
          </Button>
        </Stack>
      </form>
    </div>
  );
};
