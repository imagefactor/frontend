// @flow
import * as React from "react";
import { Button, Checkbox, Stack, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "@/shared/hooks";
import { TextInput } from "@/shared/ui";
import { addUserGroupForm, AddUserGroupFormValues } from "./form";

type Props = {
  onClose: () => void;
};

export const AddUserGroupForm = ({ onClose }: Props) => {
  const resolver = useYupValidationResolver(addUserGroupForm.validationSchema);
  const methods = useForm<AddUserGroupFormValues>({
    defaultValues: addUserGroupForm.defaultValues,
    resolver,
  });

  const toast = useToast();
  const onSubmit = async (data: AddUserGroupFormValues) => {
    await addUserGroupForm.onSubmit(data);
    onClose();
    toast({ title: "Группа создана", status: "success" });
  };

  return (
    <div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap="15px" direction="column">
          <TextInput
            label="Название группы"
            placeholder="Введите название группы"
            {...methods.register("name")}
          />
          <Checkbox {...methods.register("rights.watchProjects")}>
            Отслеживать проекты
          </Checkbox>
          <Checkbox {...methods.register("rights.fillSurvey")}>
            Заполнять опросы
          </Checkbox>
          <Checkbox {...methods.register("rights.watchStatistic")}>
            Отслеживать статистику
          </Checkbox>
          <Button type="submit" colorScheme="green">
            Добавить
          </Button>
        </Stack>
      </form>
    </div>
  );
};
