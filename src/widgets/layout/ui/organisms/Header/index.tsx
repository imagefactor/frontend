import * as React from "react";
import { usePathname } from "next/navigation";
import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();

  const activeLinkStyle = {
    color: "blue",
  };

  return (
    <Flex justifyContent="center" gap="15px" height="60px" alignItems="center">
      <ChakraLink
        href="/users"
        as={Link}
        style={pathname === "/users" ? activeLinkStyle : {}}
      >
        Пользователи
      </ChakraLink>
      <ChakraLink
        href="/user_groups"
        as={Link}
        style={pathname === "/user_groups" ? activeLinkStyle : {}}
      >
        Группы пользователей
      </ChakraLink>
      <ChakraLink
        href="/profile"
        as={Link}
        style={pathname === "/profile" ? activeLinkStyle : {}}
      >
        Профиль
      </ChakraLink>
    </Flex>
  );
};
