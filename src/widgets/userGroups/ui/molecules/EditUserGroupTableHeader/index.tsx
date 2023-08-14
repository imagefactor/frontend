import React from "react";
import { Button, Stack, useDisclosure } from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AddUserToGroupModal } from "@/widgets/userGroups/ui";

interface Props {
  onDelete: () => void;
  isDelete?: boolean;
}

export const EditUserGroupTableHeader = ({ onDelete, isDelete }: Props) => {
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
      <AddUserToGroupModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};
