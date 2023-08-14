// @flow
import * as React from "react";
import { PropsWithChildren, ReactNode } from "react";
import { Header } from "@/widgets/layout/ui";
import { Flex, Stack } from "@chakra-ui/react";

type Props = {
  Sidebar?: () => ReactNode;
};
export const BaseLayout = ({
  children,
  Sidebar = () => <></>,
}: PropsWithChildren<Props>) => {
  return (
    <Stack direction="column">
      <Header />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </Stack>
  );
};
