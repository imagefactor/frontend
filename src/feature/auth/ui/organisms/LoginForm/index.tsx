"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Center, Checkbox, Container, Stack } from "@chakra-ui/react";
import { loginForm, LoginFormValues } from "@/feature/auth/forms";
import { useYupValidationResolver } from "@/shared/hooks";
import { TextInput } from "@/shared/ui";

export const LoginForm = () => {
  const { push } = useRouter();
  const resolver = useYupValidationResolver(loginForm.validationSchema);

  const methods = useForm<LoginFormValues>({
    defaultValues: loginForm.defaultValues,
    resolver,
  });

  const onSubmit = async (data: LoginFormValues) => {
    await loginForm.onSubmit(data);
    await push("/profile");
  };
  return (
    <Container maxW="800px" height="100vh" centerContent>
      <Center height="full">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack direction="column">
            <TextInput placeholder="Логин" {...methods.register("login")} />
            <TextInput placeholder="Пароль" {...methods.register("password")} />
            <Checkbox {...methods.register("rememberMe")}>
              Запомнить меня
            </Checkbox>
            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Center>
    </Container>
  );
};
