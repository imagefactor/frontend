import React, { useMemo, useRef, useState } from "react";
import {
  EditUserGroupForm,
  EditUserGroupTableHeader,
} from "@/widgets/userGroups/ui";
import { Modal, Table } from "@/shared/ui";
import { useDeleteUsersFromGroup } from "@/widgets/userGroups/hooks";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  currentUserGroupId?: number;
}

export const EditUserGroupModal = ({
  onClose,
  isOpen,
  currentUserGroupId,
}: Props) => {
  const methodsRef = useRef<{ getIds: () => any }>(null);

  const { mutate: deleteUsersFromGroup } =
    useDeleteUsersFromGroup(currentUserGroupId);

  const [isDelete, setIsDelete] = useState(false);

  const onDeleteUsersFromGroup = () => {
    const selectedIds = methodsRef?.current?.getIds();
    deleteUsersFromGroup(Object.keys(selectedIds));
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
      headerTitle="Редактирование группы"
    >
      <EditUserGroupForm onClose={onClose} currentUserId={currentUserGroupId} />
      <EditUserGroupTableHeader
        onDelete={onDeleteUsersFromGroup}
        isDelete={isDelete}
      />
      <Table
        columns={columns}
        data={data}
        methodsRef={methodsRef}
        setIsDelete={setIsDelete}
      />
    </Modal>
  );
};
