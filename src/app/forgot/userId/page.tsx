'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const findUserId = () => {
    console.log(email);
  };

  return (
    <div className="flex flex-col grow mx-auto px-5 py-10 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-bold">비밀번호 찾기</span>

      <input type="text" placeholder="이메일" className="border rounded px-2 h-10" onChange={inputEmail} />

      <button
        type="button"
        disabled={email === ''}
        onClick={findUserId}
        className="w-80 h-10 rounded bg-blue-500 text-white font-medium disabled:opacity-50"
      >
        아이디 찾기
      </button>

      {userId !== '' && (
        <>
          <span className="text-gray-500">아이디는 {userId}입니다.</span>

          <Link href="/forgot/password" className="w-80 bg-red-500 rounded text-center text-white leading-[40px]">
            비밀번호 찾기
          </Link>
        </>
      )}
    </div>
  );
}
