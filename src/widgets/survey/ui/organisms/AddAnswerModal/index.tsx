import { AddAnswerForm } from "@/widgets/survey/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const AddAnswerModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal
      onClose={onClose}
      headerTitle="Добавить список ответов в анкету"
      isOpen={isOpen}
    >
      <AddAnswerForm onClose={onClose} />
    </Modal>
  );
};
