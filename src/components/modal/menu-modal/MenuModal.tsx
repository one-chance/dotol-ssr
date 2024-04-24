import { Modal } from '@/components/modal';

type ModalProps = {
  close: () => void;
};

export default function MenuModal({ close }: ModalProps) {
  return (
    <Modal modalId="menu-modal" onClose={close} className="w-[240px] bg-gray-200">
      123
    </Modal>
  );
}
