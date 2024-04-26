'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { USER_MENUS } from '@/contants';
import { isloggedinAtom, showLoginAtom } from '@/states';

export default function UserSection() {
  const myInfoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedin, setIsLoggedin] = useAtom(isloggedinAtom);
  const setShowLoginModal = useSetAtom(showLoginAtom);

  const closeUserMenu = () => {
    setShowUserMenu(false);
  };

  const logout = () => {
    setIsLoggedin(false);
  };

  useEffect(() => {
    const closeModal = (e: CustomEvent<MouseEvent>) => {
      if (myInfoRef.current?.contains(e.target as Node)) return;
      if (showUserMenu && !userMenuRef.current?.contains(e.target as Node)) closeUserMenu();
    };

    window.addEventListener(`mousedown`, closeModal as EventListener);

    return () => window.removeEventListener(`mousedown`, closeModal as EventListener);
  }, [showUserMenu]);

  return isLoggedin ? (
    <div className="flex flex-col relative">
      <button
        type="button"
        ref={myInfoRef}
        className="h-10 rounded bg-[#6877ff] font-semibold text-white"
        onClick={() => setShowUserMenu(!showUserMenu)}
      >
        내 정보
      </button>
      {showUserMenu && (
        <div ref={userMenuRef} className="flex flex-col absolute mt-11 rounded bg-white w-full">
          {USER_MENUS.map(menu => (
            <Link
              key={menu.name}
              href={menu.path}
              className="text-black leading-[40px] px-5 hover:bg-[#F2F5F8] first:rounded-t-lg"
              onClick={() => setShowUserMenu(false)}
            >
              {menu.name}
            </Link>
          ))}
          <button
            type="button"
            className="h-10 px-5 text-black text-left hover:bg-[#F2F5F8] rounded-b"
            onClick={logout}
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className="flex flex-row gap-2">
      <Link
        href="/signup"
        className="h-10 bg-[#f2f5f8] text-[#223a54] font-medium rounded flex-1 text-center leading-[40px]"
      >
        회원가입
      </Link>

      <button
        type="button"
        className="h-10 bg-[#6877ff] text-white font-medium rounded flex-1"
        onClick={() => setShowLoginModal(true)}
      >
        로그인
      </button>
    </div>
  );
}
