'use client';

import Link from 'next/link';
import { menu } from '@/components/icon';
import { MenuModal } from '../modal';
import { useState } from 'react';

export default function MobileHeader() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header>
      <div className="flex flex-row justify-between items-center bg-[#223A54] p-4 md:hidden">
        <button type="button" className="w-11 text-white">
          {menu}
        </button>
        <Link href="/" className="text-white text-xl text-bold">
          dotol
        </Link>
        <button type="button" className="w-11 text-white">
          로그인
        </button>
      </div>

      {/* <MenuModal close={closeModal} /> */}
    </header>
  );
}
