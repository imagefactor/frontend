import { useYupValidationResolver } from "@/shared/hooks";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  ListItem,
  Stack,
  UnorderedList,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { TextInput } from "@/shared/ui";
import * as React from "react";
import { editUserProfileForm } from "@/entitites/profile/ui/molecules/ProfileEditForm/form";
import { useEditUserProfile } from "@/entitites/profile/hooks/useEditUserProfile";
import { useProfile } from "@/entitites/profile/hooks";

type Props = {};
export const EditProfileForm = ({}: Props) => {
  const { mutate } = useEditUserProfile();
  const { data } = useProfile();
  const resolver = useYupValidationResolver(
    editUserProfileForm.validationSchema,
  );

  const methods = useForm({
    defaultValues: data,
    resolver,
  });

  const toast = useToast();

  const [isEditing, editing] = useBoolean(false);
  const onSubmit = (formData: FieldValues) => {
    mutate(formData);
    toast({ title: "Данные успешно изменены", status: "success" });
    editing.off();
  };
  const onCancel = () => {
    methods.reset();
    editing.off();
  };

  return (
    <div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap="15px" direction="column">
          <TextInput
            isDisabled={!isEditing}
            label="Имя"
            placeholder="Введите имя"
            {...methods.register("firstName")}
          />
          <TextInput
            isDisabled={!isEditing}
            label="Фамилия"
            placeholder="Введите фамилию"
            {...methods.register("lastName")}
          />
          <TextInput
            isDisabled={!isEditing}
            label="Логин"
            placeholder="Введите логин"
            {...methods.register("userName")}
          />
          <UnorderedList>
            {data?.data?.roles.map((role: string, index: number) => (
              <ListItem key={index}>{role}</ListItem>
            ))}
          </UnorderedList>

          {!isEditing && (
            <Button onClick={editing.on} colorScheme="green">
              Изменить
            </Button>
          )}

          {isEditing && (
            <>
              <Button type="submit" colorScheme="green">
                Сохранить
              </Button>
              <Button onClick={onCancel} colorScheme="green">
                Отмена
              </Button>
            </>
          )}
        </Stack>
      </form>
    </div>
  );
};
