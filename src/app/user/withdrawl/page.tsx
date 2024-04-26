'use client';

import { useState } from 'react';

export default function WithdrawlPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">회원 탈퇴</span>

      <div className="flex flex-col gap-5">
        <span className="text-sm sm:text-base text-red-400">
          - 작성한 게시물, 댓글은 자동으로 삭제되지 않습니다.
          <br />- 탈퇴하면 계정을 복구할 수 없습니다.
        </span>

        <input
          placeholder="이메일"
          value={email || ''}
          className="border rounded px-2 w-80 h-10 outline-none"
          onChange={inputEmail}
        />

        <input
          placeholder="비밀번호"
          value={password || ''}
          className="border rounded px-2 w-80 h-10 outline-none"
          onChange={inputPassword}
        />

        <button className="w-80 h-10 rounded bg-red-400 text-white font-medium">탈퇴하기</button>
      </div>
    </div>
  );
}
