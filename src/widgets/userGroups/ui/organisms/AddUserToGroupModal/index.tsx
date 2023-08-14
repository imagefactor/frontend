import { Modal, Table } from "@/shared/ui";
import React, { useMemo, useRef, useState } from "react";
import { useUsersHandling } from "@/widgets/usersHandling/hooks";
import { useAddUsersToGroup } from "@/widgets/userGroups/hooks";
import { UserHandlingHeader } from "@/widgets/usersHandling/ui";
import { Button } from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const AddUserToGroupModal = ({ onClose, isOpen }: Props) => {
  const { searchString, setSearchString, refetch } = useUsersHandling();

  const methodsRef = useRef<{ getIds: () => any }>(null);

  const { mutate: addUsersToGroup } = useAddUsersToGroup();

  const [isSelected, setIsSelected] = useState(false);

  const onAddUsersToGroup = () => {
    const selectedIds = methodsRef?.current?.getIds();
    addUsersToGroup(Object.keys(selectedIds));
    onClose();
  };

  const columns = useMemo(
    () => [
      {
        Header: "Логин",
        accessor: "userName",
      },
      {
        Header: "Имя",
        accessor: "firstName",
      },
      {
        Header: "Фамилия",
        accessor: "lastName",
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        id: "2131321321",
        userName: "1231",
        firstName: "333",
        lastName: "444",
      },
      {
        id: "2131321323",
        userName: "1231",
        firstName: "333",
        lastName: "444",
      },
      {
        id: "2131321321321312",
        userName: "1231",
        firstName: "333",
        lastName: "444",
      },
    ],
    [],
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Добавить пользователей в группу"
    >
      <UserHandlingHeader
        onSearch={refetch}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <Table
        columns={columns}
        data={data}
        methodsRef={methodsRef}
        setIsDelete={setIsSelected}
      />
      <Button
        isDisabled={!isSelected}
        onClick={onAddUsersToGroup}
        marginTop="20px"
        colorScheme="green"
        width="full"
      >
        Добавить
      </Button>
    </Modal>
  );
};
