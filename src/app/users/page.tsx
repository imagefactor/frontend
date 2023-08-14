"use client";
import React, { useMemo, useRef, useState } from "react";
import { Container, useDisclosure } from "@chakra-ui/react";
import { Table } from "@/shared/ui";
import {
  useDeleteUsers,
  useUsersHandling,
} from "@/widgets/usersHandling/hooks";
import { EditUserModal, UserHandlingHeader } from "@/widgets/usersHandling/ui";

function UsersPage() {
  const {
    searchString,
    setSearchString,
    onlyInGroups,
    setOnlyInGroups,
    groupId,
    setGroupId,
    refetch,
  } = useUsersHandling();

  const methodsRef = useRef<{ getIds: () => any }>(null);

  const { mutate: deleteUsers } = useDeleteUsers();

  const [isDelete, setIsDelete] = useState(false);

  const onDeleteUsers = () => {
    const selectedIds = methodsRef?.current?.getIds();
    deleteUsers(Object.keys(selectedIds));
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

  const {
    isOpen: isEditUserModalOpen,
    onOpen: onOpenEditUserModal,
    onClose: onCloseEditUserModal,
  } = useDisclosure();

  const [currentUserId, setCurrentUserId] = useState<number>();

  const onRowClick = (id: number) => {
    setCurrentUserId(id);
    onOpenEditUserModal();
  };

  return (
    <>
      <Container maxWidth="full">
        <UserHandlingHeader
          onSearch={refetch}
          searchString={searchString}
          setSearchString={setSearchString}
          onlyInGroups={onlyInGroups}
          setOnlyInGroups={setOnlyInGroups}
          groupId={groupId}
          setGroupId={setGroupId}
          onDelete={onDeleteUsers}
          isDelete={isDelete}
        />
        <Table
          columns={columns}
          data={data}
          methodsRef={methodsRef}
          setIsDelete={setIsDelete}
          onRowClick={onRowClick}
        />
      </Container>
      <EditUserModal
        onClose={onCloseEditUserModal}
        isOpen={isEditUserModalOpen}
        currentUserId={currentUserId}
      />
    </>
  );
}

export default UsersPage;
