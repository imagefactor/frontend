import { AddUserGroupForm } from "@/widgets/userGroups/ui";
import { Modal } from "@/shared/ui";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const AddUserGroupModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} headerTitle="Создание группы">
      <AddUserGroupForm onClose={onClose} />
    </Modal>
  );
};
