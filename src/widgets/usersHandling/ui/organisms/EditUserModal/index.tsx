import { EditUserForm } from "@/widgets/usersHandling/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  currentUserId?: number;
}

export const EditUserModal = ({ onClose, isOpen, currentUserId }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Редактирование пользователя"
    >
      <EditUserForm onClose={onClose} currentUserId={currentUserId} />
    </Modal>
  );
};
