import { EditAnswerListItemForm } from "@/widgets/survey/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  currentAnswerListItemId?: number;
}

export const EditAnswerListItemModal = ({
  currentAnswerListItemId,
  onClose,
  isOpen,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Редактирование ответа"
    >
      <EditAnswerListItemForm
        onClose={onClose}
        currentAnswerListItemId={currentAnswerListItemId}
      />
    </Modal>
  );
};
