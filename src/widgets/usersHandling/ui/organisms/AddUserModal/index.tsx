import { AddUserForm } from "@/widgets/usersHandling/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const AddUserModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle="Создание пользователя"
    >
      <AddUserForm onClose={onClose} />
    </Modal>
  );
};
