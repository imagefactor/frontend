import React, { Dispatch } from "react";
import { Button, Checkbox, Stack, useDisclosure } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AddUserModal } from "@/widgets/usersHandling/ui";

interface Props {
  searchString: string;
  setSearchString: Dispatch<string>;
  groupId?: string;
  setGroupId?: Dispatch<string>;
  onlyInGroups?: boolean;
  setOnlyInGroups?: Dispatch<boolean>;
  onSearch: () => void;
  onDelete?: () => void;
  isDelete?: boolean;
}

export const UserHandlingHeader = ({
  searchString,
  setSearchString,
  groupId,
  setGroupId,
  onlyInGroups,
  setOnlyInGroups,
  onSearch,
  onDelete,
  isDelete,
}: Props) => {
  const onChangeText = (setState: Dispatch<string>) => (e: any) => {
    setState(e.target.value);
  };
  const onToggle = (setState: Dispatch<boolean>) => (e: any) => {
    setState(e.target.checked);
  };

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
        <Input
          value={searchString}
          maxWidth="20%"
          onChange={onChangeText(setSearchString)}
          placeholder="Имя"
        />
        {setOnlyInGroups && (
          <Checkbox
            maxWidth="94px"
            width="full"
            checked={onlyInGroups}
            onChange={onToggle(setOnlyInGroups)}
          >
            В группе
          </Checkbox>
        )}
        {setGroupId && (
          <Input
            value={groupId}
            maxWidth="20%"
            onChange={onChangeText(setGroupId)}
            placeholder="Id группы"
          />
        )}
        <Button paddingX="15px" onClick={onSearch}>
          Поиск
        </Button>
      </Stack>
      <AddUserModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};
