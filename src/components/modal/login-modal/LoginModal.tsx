'use client';

import { Modal } from '@/components/modal';
import Link from 'next/link';
import { useState } from 'react';

type ModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: ModalProps) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal
      modalId="login-modal"
      onClose={onClose}
      className="bg-white rounded-2xl max-w-[340px] sm:max-w-[440px] w-full max-h-[440px] h-full p-10 gap-10"
    >
      <span className="text-4xl font-bold text-center">도톨</span>

      <div className="flex flex-col gap-4">
        <input type="text" autoComplete="username" placeholder="아이디" className="border rounded px-2 h-10" />

        <input type="password" autoComplete="password" placeholder="비밀번호" className="border rounded px-2 h-10" />
      </div>

      <div className="flex flex-row items-center gap-1">
        <Link href="/forgot/userId" className="text-gray-400 text-sm font-medium" onClick={onClose}>
          아이디 찾기
        </Link>
        <span className="text-gray-400 text-sm font-medium">/</span>
        <Link href="/forgot/password" className="text-gray-400 text-sm font-medium" onClick={onClose}>
          비밀번호 찾기
        </Link>
      </div>

      <button
        type="button"
        disabled={userId === '' || password === ''}
        className="h-10 rounded bg-[#6877FF] text-white font-medium disabled:opacity-50"
      >
        로그인
      </button>
    </Modal>
  );
}
