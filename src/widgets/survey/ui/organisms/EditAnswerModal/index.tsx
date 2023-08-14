import { EditAnswerForm } from "@/widgets/survey/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  currentAnswerId?: number;
}

export const EditAnswerModal = ({
  currentAnswerId,
  onClose,
  isOpen,
}: Props) => {
  return (
    <Modal
      onClose={onClose}
      headerTitle="Редактирование списка ответов в анкете"
      isOpen={isOpen}
    >
      <EditAnswerForm onClose={onClose} currentAnswerId={currentAnswerId} />
    </Modal>
  );
};
