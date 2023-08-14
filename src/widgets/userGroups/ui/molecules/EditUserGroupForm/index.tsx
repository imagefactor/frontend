import { Button, Checkbox, Stack, useToast } from "@chakra-ui/react";
import { TextInput } from "@/shared/ui";
import { FieldValues, useForm } from "react-hook-form";
import { useYupValidationResolver } from "@/shared/hooks";
import { useEditUser } from "@/widgets/usersHandling/hooks";
import { editUserGroupForm } from "./form";
import * as React from "react";

type Props = {
  onClose: () => void;
  currentUserId?: number;
};

export const EditUserGroupForm = ({ onClose, currentUserId }: Props) => {
  const { mutate, data } = useEditUser(currentUserId);

  const resolver = useYupValidationResolver(editUserGroupForm.validationSchema);

  const methods = useForm({
    defaultValues: data,
    resolver,
  });

  const toast = useToast();

  const onSubmit = async (data: FieldValues) => {
    mutate(data);
    onClose();
    toast({ title: "Данные группы изменены", status: "success" });
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
            Изменить
          </Button>
        </Stack>
      </form>
    </div>
  );
};
