import { useYupValidationResolver } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { Button, Stack, useDisclosure } from "@chakra-ui/react";
import { Table, TextInput } from "@/shared/ui";
import { useDeleteAnswers, useEditAnswer } from "@/widgets/survey/hooks";
import { useMemo, useRef, useState } from "react";
import { EditAnswerHeader, EditAnswerListItemModal } from "@/widgets/survey/ui";
import * as React from "react";
import { editAnswerListForm, EditAnswerFormValues } from "./form";

type Props = {
  onClose: () => void;
  currentAnswerId?: number;
};

export const EditAnswerForm = ({ onClose, currentAnswerId }: Props) => {
  const resolver = useYupValidationResolver(
    editAnswerListForm.validationSchema,
  );

  const methodsRef = useRef<{ getIds: () => any }>(null);

  const methods = useForm<EditAnswerFormValues>({
    defaultValues: editAnswerListForm.defaultValues,
    resolver,
  });

  const { mutate: editAnswers } = useEditAnswer(currentAnswerId);
  const { mutate: deleteAnswers } = useDeleteAnswers();
  const onSubmit = async (data: EditAnswerFormValues) => {
    editAnswers(data);
    onClose();
  };

  const onDeleteAnswerListItem = () => {
    const selectedIds = methodsRef?.current?.getIds();
    deleteAnswers(Object.keys(selectedIds));
  };

  const {
    isOpen: isEditAnswerListItemModalOpen,
    onOpen: onOpenEditAnswerListItemModal,
    onClose: onCloseEditAnswerListItemModal,
  } = useDisclosure();

  const [isDelete, setIsDelete] = useState(false);
  const [currentAnswerListItemId, setCurrentAnswerListItemId] =
    useState<number>();

  const onRowClick = (id: number) => {
    setCurrentAnswerListItemId(id);
    onOpenEditAnswerListItemModal();
  };

  const columns = useMemo(
    () => [
      {
        Header: "Код",
        accessor: "uploadIndex",
      },
      {
        Header: "Текст",
        accessor: "name",
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        id: "1",
        uploadIndex: "2131321321",
        name: "1234",
      },
      {
        id: "2",
        uploadIndex: "532",
        name: "12312",
      },
      {
        id: "3",
        uploadIndex: "555",
        name: "1231",
      },
      {
        id: "4",
        uploadIndex: "5255",
        name: "13231",
      },
    ],
    [],
  );

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack direction="column">
          <TextInput
            label="Наименование"
            placeholder="Наименование"
            {...methods.register("name")}
          />
          <EditAnswerHeader
            isDelete={isDelete}
            onDelete={onDeleteAnswerListItem}
          />
          <Table
            columns={columns}
            data={data}
            methodsRef={methodsRef}
            setIsDelete={setIsDelete}
            onRowClick={onRowClick}
          />
          <Button type="submit">Сохранить</Button>
        </Stack>
      </form>
      <EditAnswerListItemModal
        onClose={onCloseEditAnswerListItemModal}
        isOpen={isEditAnswerListItemModalOpen}
        currentAnswerListItemId={currentAnswerListItemId}
      />
    </>
  );
};
