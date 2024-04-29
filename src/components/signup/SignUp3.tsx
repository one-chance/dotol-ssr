'use client';

import { createUser, isDuplicatedUserId } from '@/utils';
import { useState } from 'react';

type SignUpProps = {
  email: string;
  setPhase: (phase: 1 | 2 | 3 | 4) => void;
};

export default function SignUp3({ email, setPhase }: SignUpProps) {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const nextPhase = async () => {
    const isUniqueUserId = await isDuplicatedUserId(userId);

    if (isUniqueUserId.statusCode === 400) {
      return alert('이미 사용중인 아이디입니다.');
    }

    const signUpUser = await createUser({ userId, email, password });

    if (signUpUser.statusCode === 400) {
      return alert('회원가입에 실패했습니다.');
    } else if (signUpUser.statusCode === 200) {
      setPhase(4);
    }
  };

  return (
    <>
      <div className="flex flex-col border rounded p-2.5 sm:p-10 gap-10">
        <span className="text-xl sm:text-2xl font-semibold text-center">계정 정보 입력</span>

        <div className="flex flex-col gap-5">
          <input
            autoComplete="username"
            type="text"
            className="border rounded px-2 h-10 outline-none"
            placeholder="아이디"
            onChange={inputUserId}
          />

          <input
            autoComplete="new-password"
            type="password"
            className="border rounded px-2 h-10 outline-none"
            placeholder="비밀번호"
            onChange={inputPassword}
          />

          <button
            type="button"
            className="h-10 rounded bg-[#6877FF] text-white disabled:opacity-50"
            onClick={nextPhase}
          >
            가입하기
          </button>
        </div>
      </div>
    </>
  );
}
