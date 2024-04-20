'use client';

import { USER_MENUS } from '@/contants';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function UserSection() {
  const myInfoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const logout = () => {
    console.log('logout');
  };

  useEffect(() => {
    const closeModal = (e: CustomEvent<MouseEvent>) => {
      if (myInfoRef.current?.contains(e.target as Node)) return;
      if (showUserMenu && !userMenuRef.current?.contains(e.target as Node)) setShowUserMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal as EventListener);

    return () => window.removeEventListener(`mousedown`, closeModal as EventListener);
  }, [showUserMenu]);

  return isLogin ? (
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
        className="h-10 bg-[#f2f5f8] text-[#223a54] font-semibold rounded flex-1 text-center leading-[40px]"
      >
        회원가입
      </Link>

      <button type="button" className="h-10 bg-[#6877ff] font-semibold rounded flex-1">
        로그인
      </button>
    </div>
  );
}
