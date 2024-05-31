'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { checkNewVisitor } from '@/actions/visit.action';
import { USER_MENUS } from '@/contants';
import { loginModalAtom } from '@/states';
import { signout } from '@/utils/auth';

type UserMenuProps = {
  isAuthed: boolean;
};

export default function UserMenu({ isAuthed }: UserMenuProps) {
  const router = useRouter();
  const myInfoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [, setShowLoginModal] = useAtom(loginModalAtom);

  const handleSignUp = async () => {
    if (isAuthed) {
      await signout();
    } else {
      router.push('/signup');
    }
  };

  const handleLogin = () => {
    if (isAuthed) {
      setShowUserMenu(!showUserMenu);
    } else {
      setShowLoginModal(true);
    }
  };

  useEffect(() => {
    const visitor = async () => {
      const visitor = await fetch('https://api64.ipify.org?format=json');
      const visitorIP = await visitor.json();

      await checkNewVisitor(visitorIP.ip);
    };

    visitor();
  }, []);

  useEffect(() => {
    const closeModal = (e: CustomEvent<MouseEvent>) => {
      if (myInfoRef.current?.contains(e.target as Node)) return;
      if (showUserMenu && !userMenuRef.current?.contains(e.target as Node)) setShowUserMenu(false);
    };

    window.addEventListener(`mousedown`, closeModal as EventListener);

    return () => window.removeEventListener(`mousedown`, closeModal as EventListener);
  }, [showUserMenu]);

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="h-10 bg-[#f2f5f8] text-[#223a54] font-medium rounded flex-1"
          onClick={handleSignUp}
        >
          {isAuthed ? '로그아웃' : '회원가입'}
        </button>

        <button
          type="button"
          ref={myInfoRef}
          className="h-10 bg-[#6877ff] text-white font-medium rounded flex-1"
          onClick={handleLogin}
        >
          {isAuthed ? '내 정보' : '로그인'}
        </button>
      </div>

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
        </div>
      )}
    </div>
  );
}
