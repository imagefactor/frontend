import { AddAnswerListItemForm } from "@/widgets/survey/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const AddAnswerListItemModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Добавить вариант ответ"
    >
      <AddAnswerListItemForm onClose={onClose} />
    </Modal>
  );
};
