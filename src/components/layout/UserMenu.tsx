'use client';

import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { USER_MENUS } from '@/contants';
import { isloggedinAtom, showLoginAtom } from '@/states';
import { useRouter } from 'next/navigation';
import { checkAuthed, checkNewVisitor, getIPAddress } from '@/utils';

export default function UserSection() {
  const router = useRouter();
  const myInfoRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedin, setIsLoggedin] = useAtom(isloggedinAtom);
  const [, setShowLoginModal] = useAtom(showLoginAtom);

  const handleSignUp = () => {
    if (isLoggedin) {
      localStorage.removeItem(`accessToken`);
      localStorage.removeItem(`userInfo`);
      setIsLoggedin(false);
    } else {
      router.push('/signup');
    }
  };

  const handleLogin = () => {
    if (isLoggedin) {
      setShowUserMenu(!showUserMenu);
    } else {
      setShowLoginModal(true);
    }
  };

  const visitor = async () => {
    const visitorIP = await getIPAddress();
    await checkNewVisitor(visitorIP);
  };

  useLayoutEffect(() => {
    visitor();

    const userInfo = checkAuthed();
    if (!userInfo) return setIsLoggedin(false);

    const { exp }: { exp: number } = userInfo;
    const now = Math.floor(Date.now() / 1000);

    if (exp < now) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
      return setIsLoggedin(false);
    } else {
      return setIsLoggedin(true);
    }
  }, [setIsLoggedin]);

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
          {isLoggedin ? '로그아웃' : '회원가입'}
        </button>

        <button
          type="button"
          ref={myInfoRef}
          className="h-10 bg-[#6877ff] text-white font-medium rounded flex-1"
          onClick={handleLogin}
        >
          {isLoggedin ? '내 정보' : '로그인'}
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
