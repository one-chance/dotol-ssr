import { Modal } from '@/components/modal';
import { close } from '@/components/icon';
import MenuList from './MenuList';

type ModalProps = {
  onClose: () => void;
};

export default function MenuModal({ onClose }: ModalProps) {
  return (
    <Modal
      modalId="menu-modal"
      onClose={onClose}
      className="absolute top-0 left-0 bottom-0 w-[360px] bg-[#223A54] gap-10"
    >
      <div className="h-[60px] p-4">
        <button className="text-white" onClick={onClose}>
          {close}
        </button>
      </div>

      <div className="text-white px-7 pb-10">
        <MenuList onClose={onClose} />
      </div>
    </Modal>
  );
}
