'use client';

import Link from 'next/link';
import { useSetAtom } from 'jotai';
import { menu } from '@/components/icon';
import { MenuModal } from '@/components/modal';
import { showLoginAtom } from '@/states';
import { useModal } from '@/hooks';

export default function MobileHeader() {
  const { openModal, closeModal, showModal } = useModal();
  const setShowLoginModal = useSetAtom(showLoginAtom);

  return (
    <header>
      <div className="flex flex-row justify-between items-center bg-[#223A54] p-4 md:hidden">
        <button type="button" className="w-11 text-white" onClick={() => openModal('menu')}>
          {menu}
        </button>
        <Link href="/" className="text-white text-xl text-bold">
          도톨
        </Link>
        <button type="button" className="w-11 text-white" onClick={() => setShowLoginModal(true)}>
          로그인
        </button>
      </div>

      {showModal('menu') && <MenuModal onClose={() => closeModal('menu')} />}
    </header>
  );
}
