"use client";
import React, { useMemo, useRef, useState } from "react";
import { Table } from "@/shared/ui";
import { Container, useDisclosure } from "@chakra-ui/react";
import { useUsersGroups } from "@/widgets/userGroups/hooks/useUsersGroups";
import { useDeleteUsersGroups } from "@/widgets/userGroups/hooks/useDeleteUsersGroups";
import { EditUserGroupModal, UserGroupsHeader } from "@/widgets/userGroups/ui";

function UsersGroupPage() {
  const { data: resData } = useUsersGroups();

  const methodsRef = useRef<{ getIds: () => any }>(null);

  const { mutate: deleteGroups } = useDeleteUsersGroups();

  const [isDelete, setIsDelete] = useState(false);

  const onDeleteGroups = () => {
    const selectedIds = methodsRef?.current?.getIds();
    deleteGroups(Object.keys(selectedIds));
  };

  const columns = useMemo(
    () => [
      {
        Header: "Наименование",
        accessor: "name",
        width: "100%",
      },
      {
        Header: "Дата создания",
        minWidth: 300,
        accessor: "createdAt",
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        id: "1231",
        name: "1231",
        createdAt: "23421",
      },
      {
        id: "12331",
        name: "12331",
        createdAt: "23421",
      },
    ],
    [],
  );

  const {
    isOpen: isEditGroupModalOpen,
    onOpen: onOpenEditGroupModal,
    onClose: onCloseEditGroupModal,
  } = useDisclosure();

  const [currentUserGroupId, setCurrentUserGroupId] = useState<number>();

  const onRowClick = (id: number) => {
    setCurrentUserGroupId(id);
    onOpenEditGroupModal();
  };

  return (
    <>
      <Container maxWidth="100%">
        <UserGroupsHeader onDelete={onDeleteGroups} isDelete={isDelete} />
        <Table
          columns={columns}
          data={data}
          methodsRef={methodsRef}
          setIsDelete={setIsDelete}
          onRowClick={onRowClick}
        />
      </Container>
      <EditUserGroupModal
        onClose={onCloseEditGroupModal}
        isOpen={isEditGroupModalOpen}
        currentUserGroupId={currentUserGroupId}
      />
    </>
  );
}

export default UsersGroupPage;
