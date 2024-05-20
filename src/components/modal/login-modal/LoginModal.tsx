'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Modal } from '@/components/modal';
import { isloggedinAtom } from '@/states';
import { decodeJWT, verifyUser } from '@/utils';
import { useAtom } from 'jotai';

type ModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: ModalProps) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [, setIsLoggedin] = useAtom(isloggedinAtom);

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signin = async () => {
    const res = await verifyUser(userId, password);

    if (res.statusCode === 404) {
      return alert('등록되지 않은 계정입니다.');
    } else if (res.statusCode === 400) {
      return alert('비밀번호가 일치하지 않습니다.');
    } else if (res.statusCode === 200) {
      localStorage.setItem(`accessToken`, res.data);
      localStorage.setItem('userInfo', JSON.stringify(decodeJWT(res.data)));
      setIsLoggedin(true);
      onClose();
    }
  };

  return (
    <Modal
      modalId="login-modal"
      onClose={onClose}
      className="bg-white rounded-2xl max-w-[340px] sm:max-w-[440px] w-full max-h-[440px] h-full p-10 gap-10"
    >
      <span className="text-4xl font-bold text-center">도톨</span>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          autoComplete="username"
          value={userId || ''}
          placeholder="아이디"
          className="border rounded px-2 h-10"
          onChange={inputUserId}
        />

        <input
          type="password"
          autoComplete="password"
          value={password || ''}
          placeholder="비밀번호"
          className="border rounded px-2 h-10"
          onChange={inputPassword}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              signin();
            }
          }}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-between gap-5">
        <Link href="/signup" className="text-gray-400 text-sm font-medium" onClick={onClose}>
          회원가입
        </Link>

        <div className="flex flex-row items-center gap-1">
          <Link href="/forgot/userId" className="text-gray-400 text-sm font-medium" onClick={onClose}>
            아이디 찾기
          </Link>
          <span className="text-gray-400 text-sm font-medium">/</span>
          <Link href="/forgot/password" className="text-gray-400 text-sm font-medium" onClick={onClose}>
            비밀번호 찾기
          </Link>
        </div>
      </div>

      <button
        type="button"
        disabled={userId === '' || password.length < 8}
        className="h-10 rounded bg-[#6877FF] text-white font-medium disabled:opacity-50"
        onClick={signin}
      >
        로그인
      </button>
    </Modal>
  );
}
