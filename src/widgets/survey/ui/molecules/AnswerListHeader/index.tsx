import React from "react";
import { Button, Stack, useDisclosure } from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AddAnswerModal } from "@/widgets/survey/ui";

interface Props {
  onDelete: () => void;
  isDelete?: boolean;
}

export const AnswerListHeader = ({ onDelete, isDelete }: Props) => {
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
      <AddAnswerModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};
