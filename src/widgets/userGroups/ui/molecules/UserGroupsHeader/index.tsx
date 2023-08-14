import React from "react";
import { Button, Stack, useDisclosure } from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AddUserGroupModal } from "@/widgets/userGroups/ui";

interface Props {
  onDelete: () => void;
  isDelete?: boolean;
}

export const UserGroupsHeader = ({ onDelete, isDelete }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack direction="row">
        <Button onClick={onOpen}>
          <AddIcon />
        </Button>
        <Button onClick={onDelete} isDisabled={!isDelete}>
          <DeleteIcon />
        </Button>
      </Stack>
      <AddUserGroupModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};
