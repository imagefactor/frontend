import * as React from "react";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useYupValidationResolver } from "@/shared/hooks";
import { TextInput } from "@/shared/ui";
import { addUserForm } from "./form";

type Props = {
  onClose: () => void;
};

export const AddUserForm = ({ onClose }: Props) => {
  const resolver = useYupValidationResolver(addUserForm.validationSchema);
  const methods = useForm({
    defaultValues: addUserForm.defaultValues,
    resolver,
  });

  const toast = useToast();
  const onSubmit = async (data: FieldValues) => {
    await addUserForm.onSubmit(data);
    onClose();
    toast({ title: "Пользователь создан", status: "success" });
  };

  return (
    <div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap="15px" direction="column">
          <TextInput
            label="Логин"
            placeholder="Логин"
            {...methods.register("login")}
          />
          <TextInput
            label="Пароль"
            placeholder="Пароль"
            {...methods.register("password")}
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
            Добавить
          </Button>
        </Stack>
      </form>
    </div>
  );
};
