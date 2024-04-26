'use client';

import { useState } from 'react';

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const inputOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changePassword = () => {
    console.log('change password');
  };

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">비밀번호 변경</span>

      <div className="flex flex-col gap-5">
        <input
          autoComplete="password"
          className="w-80 h-10 px-2 border rounded outline-none"
          value={oldPassword || ''}
          placeholder="기존 비밀번호"
          onChange={inputOldPassword}
        />

        <input
          className="w-80 h-10 px-2 border rounded outline-none"
          value={newPassword || ''}
          placeholder="새로운 비밀번호"
          onChange={inputNewPassword}
        />

        <button type="button" className="w-80 h-10 rounded outline-none bg-red-500 text-white" onClick={changePassword}>
          변경하기
        </button>
      </div>
    </div>
  );
}
