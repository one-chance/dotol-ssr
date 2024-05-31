'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';

import { menu } from '@/components/icon';
import { MenuModal } from '@/components/modal';
import { USER_MENUS } from '@/contants';
import { loginModalAtom } from '@/states';
import { useModal } from '@/hooks';
import { signout } from '@/utils/auth';

type HeaderProps = {
  isAuthed: boolean;
};

export default function MobileHeader({ isAuthed }: HeaderProps) {
  const myInfoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const { openModal, closeModal, showModal } = useModal();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [, setShowLoginModal] = useAtom(loginModalAtom);

  const handleLogin = () => {
    if (!isAuthed) setShowLoginModal(true);
    else setShowUserMenu(!showUserMenu);
  };

  const logout = async () => {
    await signout();
  };

  useEffect(() => {
    const closeModal = (e: CustomEvent<MouseEvent>) => {
      if (myInfoRef.current?.contains(e.target as Node)) return;
      if (showUserMenu && !userMenuRef.current?.contains(e.target as Node)) setShowUserMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal as EventListener);

    return () => window.removeEventListener(`mousedown`, closeModal as EventListener);
  }, [showUserMenu]);

  return (
    <header>
      <div className="flex flex-row justify-between items-center bg-[#223A54] p-4 md:hidden">
        <div className="flex flex-row items-center w-12">
          <button type="button" className="text-white" onClick={() => openModal('menu')}>
            {menu}
          </button>
        </div>

        <Link href="/" className="text-white text-xl text-bold">
          도톨
        </Link>

        <div className="flex flex-col items-end">
          <button type="button" ref={myInfoRef} className="w-12 text-white outline-none" onClick={handleLogin}>
            {isAuthed ? '내 정보' : '로그인'}
          </button>

          {showUserMenu && (
            <div
              ref={userMenuRef}
              className="flex flex-col absolute right-0 mt-11 rounded bg-white border w-40 z-[100]"
            >
              {USER_MENUS.map(menu => (
                <Link
                  key={menu.name}
                  href={menu.path}
                  className="text-black leading-[40px] px-5 bg-gray-100 hover:bg-[#F2F5F8] first:rounded-t-lg"
                  onClick={() => setShowUserMenu(false)}
                >
                  {menu.name}
                </Link>
              ))}

              <button
                type="button"
                className="h-10 px-5 text-black text-left bg-gray-100 hover:bg-[#F2F5F8] rounded-b"
                onClick={logout}
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal('menu') && <MenuModal onClose={() => closeModal('menu')} />}
    </header>
  );
}
