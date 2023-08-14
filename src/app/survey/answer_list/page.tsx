"use client";
import { Table } from "@/shared/ui";
import { useMemo, useRef, useState } from "react";
import { Container, useDisclosure } from "@chakra-ui/react";
import { AnswerListHeader, EditAnswerModal } from "@/widgets/survey/ui";
import { useDeleteAnswers } from "@/widgets/survey/hooks";

const AnswerListPage = () => {
  const methodsRef = useRef<{ getIds: () => any }>(null);

  const { mutate: deleteAnswers } = useDeleteAnswers();

  const [isDelete, setIsDelete] = useState(false);

  const onDeleteAnswers = () => {
    const selectedIds = methodsRef?.current?.getIds();
    deleteAnswers(Object.keys(selectedIds));
  };

  const columns = useMemo(
    () => [
      {
        Header: "Наименование",
        accessor: "name",
        width: "100%",
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        id: "2131321321",
        name: "1231",
      },
      {
        id: "2131321323",
        name: "1232",
      },
      {
        id: "2131321321321312",
        name: "1233",
      },
    ],
    [],
  );

  const {
    isOpen: isEditAnswerModalOpen,
    onOpen: onOpenEditAnswerModal,
    onClose: onCloseEditAnswerModal,
  } = useDisclosure();

  const [currentAnswerId, setCurrentAnswerId] = useState<number>();

  const onRowClick = (id: number) => {
    setCurrentAnswerId(id);
    onOpenEditAnswerModal();
  };

  return (
    <Container maxWidth="full">
      <AnswerListHeader onDelete={onDeleteAnswers} isDelete={isDelete} />
      <Table
        methodsRef={methodsRef}
        setIsDelete={setIsDelete}
        onRowClick={onRowClick}
        data={data}
        columns={columns}
      />
      <EditAnswerModal
        onClose={onCloseEditAnswerModal}
        isOpen={isEditAnswerModalOpen}
        currentAnswerId={currentAnswerId}
      />
    </Container>
  );
};

export default AnswerListPage;
