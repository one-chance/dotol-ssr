import { useAtom } from 'jotai';
import { modalAtom } from '@/states';

export const useModal = () => {
  const [modals, setModals] = useAtom(modalAtom);

  const openModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: true });
  };

  const closeModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: false });
  };

  const showModal = (modalId: string) => {
    return modals[modalId] || false;
  };

  return { openModal, closeModal, showModal };
};
