'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  className?: string;
  modalId: string;
  onClose: (modalId: string) => void;
  children: ReactNode;
};

export default function Modal({ className, modalId, onClose, children }: ModalProps) {
  const container = document.getElementById(`modal`) as HTMLElement;

  const handleOverlayClick = () => {
    onClose(modalId);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOverlayClick();
      }
    };

    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.body.removeEventListener('keydown', handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return container
    ? typeof window !== 'undefined' &&
        createPortal(
          <div
            id={`${modalId}-overlay`}
            role="presentation"
            className="fixed flex-col justify-center items-center inset-0 z-[1000] bg-[#0000004d] overflow-y-auto"
            onClick={handleOverlayClick}
            style={{ scrollbarWidth: 'none' }}
          >
            <div
              id={`${modalId}-content`}
              className={`flex flex-col overflow-y-auto p-5 ${className}`}
              onClick={handleContentClick}
            >
              {children}
            </div>
          </div>,
          container,
        )
    : null;
}
