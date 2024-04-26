'use client';
import { useState } from 'react';

export default function ForgotUserIdPage() {
  const [email, setEmail] = useState('');
  const [usreId, setUserId] = useState('');
  const [isSent, setIsSent] = useState(false);

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const findPassword = () => {
    console.log(email);
    setIsSent(true);
  };

  return (
    <div className="flex flex-col grow mx-auto px-5 py-10 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-bold">비밀번호 찾기</span>

      <div className="flex flex-col gap-5">
        <input type="text" placeholder="이메일" className="border rounded px-2 h-10" onChange={inputEmail} />
        <input type="text" placeholder="아이디" className="border rounded px-2 h-10" onChange={inputUserId} />
      </div>

      <button
        type="button"
        disabled={email === '' || usreId === ''}
        onClick={findPassword}
        className="w-80 h-10 rounded bg-blue-500 text-white font-medium disabled:opacity-50"
      >
        비밀번호 찾기
      </button>

      {isSent && <span className="text-red-500 text-center">비밀번호 초기화 이메일이 전송되었습니다.</span>}
    </div>
  );
}
